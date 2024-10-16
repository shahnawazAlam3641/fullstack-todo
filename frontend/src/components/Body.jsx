import React, { useState } from "react";
import TodoCard from "./TodoCard";

const Body = () => {
  const [todo, setTodo] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [alreadyExists, setAlreadyExists] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();

    const exist = todo.some((work) => work.name === name);

    if (exist) {
      setAlreadyExists(true);

      setTimeout(() => {
        setAlreadyExists(false);
      }, 2000);
    } else if (name === "" || description === "") {
      return;
    } else {
      setTodo((oldTodoList) => {
        return [...oldTodoList, { name: name, description: description }];
      });
      setName("");
      setDescription("");
    }
  };

  const deleteTodo = (todoName) => {
    todo.map((todo, index) => {
      console.log(todo);
      if (todo.name == todoName) {
        setTodo((oldState) => {
          const prevState = [...oldState];
          console.log(prevState);

          prevState.splice(index, 1);
          console.log(prevState);

          return prevState;
        });
      } else return;
    });
  };

  return (
    <div className="flex mx-auto flex-col max-w-[90%]">
      <form className="flex mx-auto my-8 gap-6 flex-wrap justify-center">
        <input
          type="text"
          placeholder="Todo Name"
          className="bg-gray-50 rounded-md p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          className="bg-gray-50 rounded-md p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-green-400 p-2 rounded-md text-white font-semibold"
        >
          Create Todo
        </button>
      </form>
      <h1
        className={`text-red-500 text-center ${
          alreadyExists ? "block" : "hidden"
        }`}
      >
        Todo Name already Exists
      </h1>
      <h1 className="text-3xl my-6 mx-auto">My Todo</h1>

      <div className="flex gap-4 flex-wrap mx-auto">
        {todo.map((work) => {
          return (
            <TodoCard key={work.name} info={work} deleteTodo={deleteTodo} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
