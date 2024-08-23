import "./App.css";

import { User, Nav } from "./components";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Nav />
        <User />
       
      </UserProvider>
    </>
  );
}

export default App;
