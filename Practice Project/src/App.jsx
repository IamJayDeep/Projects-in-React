import { useState } from "react";
import Accordian from "./Components/Accordian";
import "./App.css";
import RandomColor from "./Components/RandomColor/Index";
import StarRating from "./Components/Star-Rating/StarRating";
import Input from "./Components/Input/Input";
import Toggle from "./Components/Toggle/Toggle";
import FetchApi from "./Components/Fetch API/FetchApi";
import Timer from "./Components/Timer/Timer";
import Todo from "./Components/TODO/todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Accordian */}
      {/* <Accordian />  */}

      {/* Random Color generator */}
      {/* <RandomColor /> */}

      {/* <StarRating noOfStar={10}/> */}

      {/* <Input /> */}

      {/* <Toggle /> */}

      {/* <FetchApi /> */}

      {/* <Timer /> */}

      <Todo />
    </div>
  );
}

export default App;
