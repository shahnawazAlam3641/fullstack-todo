import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

const Nav = () => {
  const { loggedInUser } = useContext(userContext);

  return (
    <div className="shadow-lg flex justify-between p-6">
      <h1 className="text-2xl font-bold">{loggedInUser}</h1>
      <div className="flex gap-5">
        <Link to={"/app/todo"}>
          <h1 className="text-2xl font-semibold">Home</h1>
        </Link>
        <Link to={"/app/completed"}>
          <h1 className="text-2xl font-semibold">Completed</h1>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
