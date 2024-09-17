import React, { useState } from "react";
import styled from "styled-components";

export default function NumSelector({
  error,
  selectedNumber,
  setSelectedNumber,
}) {
  const arrNum = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <p>{error}</p>
      <div className="flex">
        {arrNum.map((val, ixd) => (
          <Button
            isselected={val === selectedNumber}
            onClick={() => setSelectedNumber(val)}
            key={ixd}
          >
            {val}
          </Button>
        ))}
      </div>

      <p>Select Number</p>
    </Container>
  );
}
const Button = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  p:first-child {
    color: red;
  }
  .flex {
    display: flex;
    gap: 20px;
    max-height: 150px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;
