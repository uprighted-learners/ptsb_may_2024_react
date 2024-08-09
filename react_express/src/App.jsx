import { useState, useEffect } from "react";

import "./App.css";

import Auth from "./components/Auth/Auth";
import Posts from "./components/Posts/Posts";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    let token = localStorage.getItem("MyToken");
    if (token) {
      setSessionToken(token);
    }
  }, []);

  //? Creating a helper function to handle setting up a token in localStorage
  const updateToken = (token) => {
    console.log("Token updated!");
    localStorage.setItem("MyToken", token);
    setSessionToken(token);
  };

  const clearToken = () => {
    console.log("Token Removed!");
    setSessionToken("");
    localStorage.clear();
  };

  return (
    <>
      {/* Check session token, if it is not avail, show user auth. */}

      {!sessionToken ? (
        <Auth updateToken={updateToken} />
      ) : (
        <div>
          {/* Logout button */}
          <button
            style={{ position: "absolute", top: 0, right: 0, margin: "1em" }}
            onClick={() => clearToken()}
          >
            Logout
          </button>

          {/* Posts component, which will render out all posts, and allow the user to create one */}

          <Posts />
        </div>
      )}
    </>
  );
}

export default App;
