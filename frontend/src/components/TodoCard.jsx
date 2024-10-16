import React, { useState } from "react";
import star from "../assets/star.svg";
import ellipsis from "../assets/ellipsis.svg";

const TodoCard = ({ info, deleteTodo }) => {
  const [showEllipsis, setShowEllipsis] = useState(false);

  console.log(info);
  return (
    <div className="flex flex-col bg-gray-100 min-w-64 p-2 rounded-md relative">
      <div className="flex flex-col gap-1 border-b-2 p-2">
        <p className="text-3xl font-semibold">{info.name}</p>
        <p className="text-gray-500">{info.description}</p>
      </div>
      <div className="flex p-2 justify-between">
        <div className="flex items-center gap-1">
          <p>Completion Status:</p>
          <div className="w-4 h-4 rounded-full bg-red-500 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_2px] shadow-red-500"></div>
        </div>
        {/* <img src={star} className="w-5 " /> */}
      </div>
      <img
        src={ellipsis}
        className="w-1 m-1 absolute right-2 top-2 hover:bg-gray-400 rounded-xl"
        onClick={() => setShowEllipsis(!showEllipsis)}
      />
      <div
        className={` right-5 bg-white p-1 rounded-md ${
          showEllipsis ? "absolute" : "hidden"
        }`}
      >
        <p className="hover:bg-slate-100 rounded-sm p-">Completed</p>
        <p
          className="hover:bg-slate-100 rounded-sm p-"
          onClick={() => {
            deleteTodo(info.name);
          }}
        >
          Delete
        </p>
      </div>
    </div>
  );
};

export default TodoCard;
