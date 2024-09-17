import React, { useState } from "react";
import styled from "styled-components";

function RoleDice({ currentDice,  roleDice }) {
  return (
    <DiceContainer>
      <div className="Dice">
        <img
          onClick={roleDice}
          src={`/Images/Dices/dice_${currentDice}.png`}
          alt="dice"
        />
      </div>
      <p>Click on Dice to Role</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  .Dice {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 24px;
  }
`;
