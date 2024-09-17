import { useState } from "react";
import StartGame from "./Components/StartForm/StartGame";
import PlayGame from "./Components/PlayGame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleStart = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <PlayGame /> : <StartGame toggle={toggleStart} />}</>
  );
}

export default App;
