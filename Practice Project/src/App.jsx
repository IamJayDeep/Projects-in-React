import { useState } from "react";
import Accordian from "./Components/Accordian";
import "./App.css";
import RandomColor from "./Components/RandomColor/Index";
import StarRating from "./Components/Star-Rating/StarRating";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Accordian */}
      {/* <Accordian />  */}
      
      {/* Random Color generator */}
      {/* <RandomColor /> */}

      <StarRating noOfStar={10}/>
    </div>
  );
}

export default App;
