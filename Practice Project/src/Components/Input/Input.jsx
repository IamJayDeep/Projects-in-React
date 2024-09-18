import React, { useState } from "react";

function Input() {
  const [input, setInput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.userInput.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userInput" style={{ fontSize: "1.2rem" }}>
          Input Your Thoughts:
        </label>
        <input
          type="text"
          id="userInput"
          name="userInput"
          placeholder="Your thoughts..."
          style={{
            width: "40%",
            height: "30px",
            paddingLeft: "5px",
            fontSize: "1.2rem",
            marginLeft: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            fontSize: "1.2rem",
            padding: "5px 10px",
            marginLeft: "10px",
          }}
        >
          Submit
        </button>
      </form>

      {input && <li>{input}</li>}
    </div>
  );
}

export default Input;
