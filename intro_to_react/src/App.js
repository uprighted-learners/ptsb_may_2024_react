import { useState } from "react"
import './App.css';
import AboutMe from "./Components/AboutMe"

function App() {
  const [myName, setMyName] = useState("")

  return (
    // Represents a fragment tag, acts as a container, in order to return 1 thing.
    <> 

      <div className="App">
        
        <h1>my name</h1>

        {myName}
      </div>

      <div>
      <NewComponent />
      <AboutMe />
      </div>
    </>
  );
}

const NewComponent = () => {
  return(
    <>
      <h3>Hey, greetings from the child component!</h3>
    </>
  )
}

export default App;