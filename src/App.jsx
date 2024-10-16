import { useState } from "react";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";

function App() {
  const [todo, setTodo] = useState({});
  const [userName, setUserName] = useState("");

  return (
    <>
      <userContext.Provider value={{ loggedInUser: "good" }}>
        <div>
          <Nav />
          <Outlet />
        </div>
      </userContext.Provider>
    </>
  );
}

export default App;
