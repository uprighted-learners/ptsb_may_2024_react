import { useState } from "react";

const Auth = () => {
  // Setting up state variables to capture user input for signing up
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("")

  const handleSignup = async () => {
    try {
    setErrorMsg("")
      const result = await fetch("http://localhost:9000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first: firstName,
          last: lastName,
          email: email,
          pass: password,
        }),
      });

      const json = await result.json();
      if(json.Error){
          throw new Error(json.Error)
      }

      console.log(json)
    } catch (err) {
      setErrorMsg(err.message)
    }
  };

  return (
    <div>
        <h3 style={{color: "red"}}>{errorMsg}</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>First</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <label>Email</label>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Auth;
