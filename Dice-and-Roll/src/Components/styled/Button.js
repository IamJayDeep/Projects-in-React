import styled from "styled-components";

export
  const Button = styled.button`
  min-width: 220px;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  border-radius: 0.3rem;
  outline: none;
  cursor: pointer;
  transition: 0.1s ease-in;
  &:hover {
    background-color: #fff;
    color: #000;
    transition: 0.1s ease-in-out;
  }
`;
export const Outline = styled(Button)`
  background-color:#fff;
  color:#000;
  &:hover{
    background-color: #000;
    color: #fff;
  }
`