const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your First Name"],
      minLength: [3, "First Name should be atleast of 3 characters"],
      maxLength: [16, "First Name should not conatin more than 16 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter your Last Name"],
      minLength: [3, "Last Name should be atleast of 3 characters"],
      maxLength: [16, "Last Name should not conatin more than 16 characters"],
    },
    email: {
      type: String,
      required: [true, "Enter a valid Email Id"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Enter a Password"],
    },
    gender: {
      type: String,
      required: [true, "Please enter your Gender"],
      enum: ["male", "female", "other"],
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchema);

module.exports = User;
