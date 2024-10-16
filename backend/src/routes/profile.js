const express = require("express");
const profileRouter = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userAuth = require("../middlewares/userAuth");

profileRouter.post("/signup", async (req, res) => {
  try {
    const { email, password, gender, firstName, lastName } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.json({
        message: "User with this Email already Exists",
      });
    }

    const hashedPasword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashedPasword,
      gender,
      firstName,
      lastName,
    });

    console.log(user);

    await user.save();

    res.json({ message: "User created" });
  } catch (error) {
    res.json(error);
  }
});

profileRouter.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.json({
        message: "Email not registered",
      });
    }

    const isPasswordCorrect = bcrypt.compare(password, userExist.password);

    if (!isPasswordCorrect) {
      return res.json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(email, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.json({ message: "Sign In Successful", userExist });

    console.log(token);
  } catch (error) {
    res.json(error);
  }
});

profileRouter.post("/logout", userAuth, (req, res) => {
  try {
    res.cookie("token", null);
    res.json({ message: "Logout Successful" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = profileRouter;
