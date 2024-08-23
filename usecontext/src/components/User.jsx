import React from "react";

import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/ThemeContext";

import "./User.css"

const User = () => {
  const [userName] = useContext(UserContext);
  const [,,theme] = useContext(ThemeContext);

  return (
    <div className="user-container" style={theme}>
      <h1>{userName}</h1>
    </div>
  );
};

export default User;
