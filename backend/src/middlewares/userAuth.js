const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    // console.log("res.cookies");
    // console.log(token);

    if (!token) {
      throw new Error("Please login with your credentials");
    }

    const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ email: decodedJwt });

    // console.log(user);

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};

module.exports = userAuth;
