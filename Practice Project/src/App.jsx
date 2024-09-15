import { useState } from "react";
import Accordian from "./Components/Accordian";
import "./App.css";
import RandomColor from "./Components/RandomColor/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Accordian */}
      {/* <Accordian />  */}
      
      {/* Random Color generator */}
      <RandomColor />
    </div>
  );
}

export default App;
