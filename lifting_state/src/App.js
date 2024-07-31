import "./App.css";
import { useState } from "react";

import Form from "./components/Form";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <Nav />

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
