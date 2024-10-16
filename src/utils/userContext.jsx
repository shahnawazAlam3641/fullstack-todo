import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "Elon",
  password: "",
});

export default userContext;
