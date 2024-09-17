import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

export default function StartGame({ toggle }) {
  return (
    <Container>
      <div>
        <img src="/Images/dices.png" alt="dices" />
      </div>
      <div className="container">
        <h1>Dice and Roll</h1>
        <Button onClick={toggle}>Play Game</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .container {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;


