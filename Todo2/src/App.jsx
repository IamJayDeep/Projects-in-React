import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (input === "") {
      setError("Please add todo first...");
    } else {
      setError("");
    }

    if (input !== "") {
      const newTodo = [...todos, input];
      setTodos(newTodo);
      localStorage.setItem("todos", JSON.stringify(newTodo));
      setInput("");
    }
  };

  const removeTodo = (index) => {
    const filter = todos.filter((_, i) => i !== index);
    setTodos(filter);
    localStorage.setItem("todos", JSON.stringify(filter));
  };

  useEffect(() => {
    if (localStorage.getItem("todos"))
      setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);
  return (
    <div className="container min-w-screen mx-auto bg-slate-600 min-h-screen">
      <div className="flex justify-center pt-20">
        <input
          className="border-2 rounded-md border-neutral-700 mx-3 px-3 h-10 text-lg placeholder-gray-500"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add Your Todo..."
        />
        <button
          className="bg-sky-200 px-4 rounded-md hover:bg-sky-400 border-white border"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className="mt-10">
        {error && <p>{error}</p>}

        {todos.map((todo, i) => (
          <div key={i} className="mt-4">
            <ul className="flex flex-wrap justify-between items-center w-1/2 mx-auto bg-slate-400 rounded-md">
              <li className="p-3 text-wrap">{todo}</li>
              <button className="" onClick={() => removeTodo(i)}>
                ❌
              </button>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
