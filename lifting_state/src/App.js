import "./App.css";
import { useState } from "react";

import Form from "./components/Form";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ? Helper function that can set state in the parent,, and get called elsewhere

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  }


  return (
    <div className="App">
      <Nav loggedIn={loggedIn} username={username} handleLogout={handleLogout}
      
      />
      {
        !loggedIn ?
        <Form
          setLoggedIn={setLoggedIn}
          setUsername={setUsername}
          setPassword={setPassword}

          username={username}
          password={password}


        /> : <Home />
      }
    


    </div>
  );
}

export default App;
