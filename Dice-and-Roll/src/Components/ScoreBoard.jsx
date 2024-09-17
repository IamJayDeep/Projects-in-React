import React from "react";
import styled from "styled-components";

function ScoreBoard({score}) {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}

export default ScoreBoard;

const ScoreContainer = styled.div`
  text-align: center;
  max-width: 200px;
  h1 {
    font-size: 76px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;
