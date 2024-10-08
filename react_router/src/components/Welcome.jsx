import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome</h1>

      <NavLink to="new-user">Enter</NavLink>

      <Routes>
        {/* If a parent is loaded with "/welcome/*", this nested route will assume that /welcome is already present, which allows us to omit it from this nested path */}
        <Route
          path="/new-user"
          element={
            <div>
              <h3>Hey User!</h3>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default Welcome;
