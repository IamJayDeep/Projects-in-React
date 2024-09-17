import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard";
import NumSelector from "./NumSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button, Outline } from "./styled/Button";
import Rules from "./Rules";

function PlayGame() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRule, setShowRule] = useState(false);

  const RndNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const RandomNum = RndNumber(1, 7);
    setCurrentDice((prev) => RandomNum);

    if (selectedNumber === RandomNum) {
      setScore((prev) => prev + selectedNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <Main>
      <div className="top_sec">
        <ScoreBoard score={score} />
        <NumSelector
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btn">
        <Outline onClick={() => setScore(0)}>Reset Game</Outline>
        <Button onClick={() => setShowRule((prev) => !prev)}>
          {showRule ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRule && <Rules />}
    </Main>
  );
}

export default PlayGame;

const Main = styled.div`
  margin-top: 70px;
  margin-left: 50px;
  margin-right: 50px;

  .top_sec {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btn {
    display: flex;
    flex-direction: column;
    max-width: 200px;
    gap: 1rem;
    margin: 1rem auto;
  }
`;
