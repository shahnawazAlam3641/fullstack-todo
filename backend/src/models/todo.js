const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Type your Todo name"],
      minLenght: [3, "Todo name should contain atleast 3 Characters"],
      maxLenght: [20, "Todo name should not contain more than 20 Characters"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Type your Todo name"],
      minLenght: [10, "Todo name should contain atleast 10 Characters"],
      maxLenght: [50, "Todo name should not contain more than 50 Characters"],
      trim: true,
    },
    dueDate: {
      type: Date,
      required: [true, "Please Specify Due Date"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
