import React, { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input !== "") {
      setTodos([...todos, input]);
    }
    setInput("");
  };

  const removeTodo = (id) => {
    const newTodo = todos.filter((_, i) => i !== id);
    setTodos(newTodo);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      {todos.map((val, ixd) => (
        <ul>
          <li
            key={ixd}
            style={{ listStyleType: "none", display: "inline-block" }}
          >
            {val}
          </li>
          <button
            key={ixd}
            onClick={() => removeTodo(ixd)}
            style={{ display: "inline-block" }}
          >
            ❌
          </button>
        </ul>
      ))}
    </div>
  );
}

export default Todo;
