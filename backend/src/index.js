const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const profileRouter = require("./routes/profile");
const todoRouter = require("./routes/todo");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/todo", todoRouter);

connectDB()
  .then(() => {
    console.log("DB connection Successful");
    app.listen(3000, () => {
      console.log(`App is listening on PORT ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
