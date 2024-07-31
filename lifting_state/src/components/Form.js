import React from "react";

const Form = (props) => {
  // console.log(props)

  // Helper function
  const handleSubmit = (event) => {
    event.preventDefault()

    // Do a fetch here, after getting the input values in state

    props.setLoggedIn(true)

  }
  return <form className="auth-form col" onSubmit={handleSubmit}>
    <label>User Name</label>
    <input 
      required
      // onchange here later
      onChange={(event) => {
        props.setUsername(event.target.value)
      }}

      value={props.username}
    />

    <label>Password</label>
    <input 
    required 
    // onchange here later
    onChange={(event) => {
      props.setPassword(event.target.value)
    }}
    value={props.password}
    />
    
    <button id="auth-form_btn" type="submit">Signup</button>
     </form>;
};

export default Form;
