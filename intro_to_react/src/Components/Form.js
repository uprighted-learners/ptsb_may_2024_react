import { useState } from "react";

const Form = () => {


  const [typing, setTyping] = useState(""); // input begins blank


const handleChange = (e) => {
    setTyping(e.target.value) // update state with what the person has typed
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted", typing) // I can grab this data from state, instead of the form itself
}


  return (
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={typing} />

        <button>Submit</button>
    </form>
  )
};

export default Form;
