import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./components/SignIn.jsx";
import CompletedTodo from "./components/CompletedTodo.jsx";
import Body from "./components/Body.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "completed",
        element: <CompletedTodo />,
      },
      {
        path: "todo",
        element: <Body />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
