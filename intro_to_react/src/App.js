import { useState } from "react"
import './App.css';
import AboutMe from "./Components/AboutMe"
import Form from "./Components/Form"

function App() {
  const [myName, setMyName] = useState("");

  const handleChange = (event) => {
    setMyName(event.target.value)
  }

  return (
    // Represents a fragment tag, acts as a container, in order to return 1 thing.
    <> 
      <div className="App">
  
      <form onSubmit={(event) => {
        event.preventDefault();
        console.log("form was submitted")
      }}>

       <label htmlFor="my-name">Name:</label>
       {/* //? Event listener directly on input field */}
       <input id="my-name" onChange={handleChange} />

       <button>Update Name</button>

      </form>

        {/* {myName} */}
      </div>

      <div>
      <NewComponent />

      <AboutMe myName={myName} />
      </div>

      <Form />
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