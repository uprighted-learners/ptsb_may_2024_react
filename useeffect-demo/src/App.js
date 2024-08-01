import {useState} from 'react'
import './App.css';

import HookUseEffect from './components/HookUseEffect';

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">

      <button onClick={() => {
        // setShow(!show)

        //? Smarter approach for flipping booleans with state
        setShow((prev) => !prev )
      }}>{show ? "Hide" : "Show"}</button>

      {show && <HookUseEffect />}
     
    </div>
  );
}

export default App;
