import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  const HandleAdd = () => {
    setTodos([...todos, input]);
    localStorage.setItem("todos", JSON.stringify(todos));
    setInput("");
  };

  const HandleAtoZ = () => {
    const newTodos = [...todos.toSorted()];
    setTodos(newTodos);
  };

  const HandleZtoA = () => {
    const newTodos = [...todos.toReversed()];
    setTodos(newTodos);
  };

  const removeTodo = (todoTORemove) => {
    const newTodo = todos.filter((todo) => todo !== todoTORemove);
    setTodos(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={HandleAdd}>Add</button>
        <button onClick={HandleAtoZ}>A to Z</button>
        <button onClick={HandleZtoA}>Z to A</button>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => removeTodo(todo)}>
            {todo}
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
