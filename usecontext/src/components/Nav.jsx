//? Utilized to unpack the values found in the context
import {useContext} from "react";

//? Importing exact context itself
import { UserContext} from '../contexts/UserContext'



const Nav = () => {
  const [userName, setUserName] = useContext(UserContext)
  return (
    <nav>
      <p>Home</p>
      <p>About</p>
      <p>Auth</p>

      <input type="text" placeholder={userName} onChange={(e) => setUserName(e.target.value)} />

      {/* Checkbox that will toggle light/dark */}
      <p>Dark or light</p>
    </nav>
  );
};

export default Nav;

