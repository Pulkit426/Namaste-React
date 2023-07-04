import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy Name",
    email: "Dummy email",
  },
});

export default UserContext;
