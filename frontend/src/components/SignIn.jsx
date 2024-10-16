import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="bg-gradient-to-r from-violet-200 to-pink-200 flex flex-col gap-4 justify-center items-center h-[100vw]">
      <h1 className="text-3xl">Sign In</h1>
      <form className="flex flex-col gap-4 bg-slate-200 p-8 rounded-lg">
        <input className="rounded-md p-1" type="text" placeholder="Username" />
        <input
          className="rounded-md p-1"
          type="password"
          placeholder="Password"
        />
        <Link to={"/app/todo"}>
          <button className="bg-green-400 text-white p-1 rounded-md w-full">
            Sign In
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
