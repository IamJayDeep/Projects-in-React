import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isRegisterd, setIsRegisterd] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRegisterd(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="johndoe@abc.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={handleAuth}>
          {isRegisterd ? "Register" : "Log in"}
        </button>
      </form>
      {isRegisterd ? "Click below to Log in" : "Click below to Register"}
      <p></p>
      <button onClick={() => setIsRegisterd(!isRegisterd)}>
        {isRegisterd ? "Click here to Log in" : "Click here to Register"}
      </button>
    </div>
  );
}

export default Login;
