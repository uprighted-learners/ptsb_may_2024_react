//? Utilized to unpack the values found in the context
import {useContext} from "react";

//? Importing exact context itself
import { UserContext} from '../contexts/UserContext'
import { ThemeContext} from '../contexts/ThemeContext'

//? Import CSS
import './Nav.css'

const Nav = () => {
  const [userName, setUserName] = useContext(UserContext)
  const [darkMode, setDarkMode, theme] = useContext(ThemeContext)

 
  return (
    <nav style={theme} >
      <p>Home</p>
      <p>About</p>
      <p>Auth</p>

      <input type="text" placeholder={userName} onChange={(e) => setUserName(e.target.value)} />

      <label className="switch">
          <input type="checkbox"
          // defaultChecked="false"
          onChange={()=>{setDarkMode((prior) => !prior)}}
          />
          <span className="slider round"></span>
          <p>{darkMode ? "Dark" : "Light"}</p>

      </label>
    </nav>
  );
};

export default Nav;

