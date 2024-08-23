import "./App.css";

import { User, Nav } from "./components";
import UserProvider from "./contexts/UserContext";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <UserProvider>
        <ThemeProvider>
          <Nav />
          <User />
        </ThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
