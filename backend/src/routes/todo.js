const express = require("express");
const userAuth = require("../middlewares/userAuth");
const Todo = require("../models/todo");

const todoRouter = express.Router();

todoRouter.post("/create", userAuth, async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;

    const todo = new Todo({
      title,
      description,
      dueDate,
      user: req.user._id,
    });

    await todo.save();

    res.json({ message: "Todo saved Successfully", todo });
  } catch (error) {
    res.json({ error: error.message });
  }
});

todoRouter.patch("/update/:todoId", userAuth, async (req, res) => {
  try {
    currentUser = req.user;
    const todoId = req.params.todoId;

    const allowedUpdates = ["dueDate", "title", "description", "completed"];

    Object.keys(req.body).map((key) => {
      if (!allowedUpdates.includes(key)) {
        return res.json({ message: `Updating ${key} not allowed` });
      }
    });

    const updatedTodo = await Todo.findByIdAndUpdate(todoId, req.body);

    res.json({ message: "Update Successful", updatedTodo });
  } catch (error) {
    res.json({ error: error.message });
  }
});

todoRouter.get("/view", userAuth, async (req, res) => {
  try {
    const currentUser = req.user;

    const todos = await Todo.find({ user: currentUser._id }).populate(
      "user",
      "firstName"
    );

    res.json({ todos });
  } catch (error) {
    res.json({ error: error.message });
  }
});

todoRouter.delete("/delete/:todoId", userAuth, async (req, res) => {
  try {
    const todoId = req.params.todoId;

    const todoToDelete = await Todo.findById(todoId);

    if (todoToDelete) {
      const deletedTodo = await Todo.findByIdAndDelete(todoId);
      console.log(deletedTodo);

      res.json({ message: "Todo Deleted successfully", deletedTodo });
    } else {
      res.json({ message: "Todo does not exist" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = todoRouter;
