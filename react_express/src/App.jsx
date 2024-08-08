import { useState } from "react";

import "./App.css";

import Auth from "./components/Auth/Auth";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  //? Creating a helper function to handle setting up a token in localStorage
  const updateToken = (token) => {
    console.log("Token updated!");
    localStorage.setItem("MyToken", token);
    setSessionToken(token);
  };

  return (
    <>
      {/* Check session token, if it is not avail, show user auth. */}

      {
      !sessionToken ? <Auth updateToken={updateToken} /> : 
        <div>
            {/* Logout button */}

            {/* Posts component, which will render out all posts, and allow the user to create one */}
          
          Posts
          
        </div>
      }
    </>
  );
}

export default App;
