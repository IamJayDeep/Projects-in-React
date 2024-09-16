import { useState } from "react";
import "./App.css";
import Nav from "./Component/Navigation/Nav";
import ContectHeader from "./Component/ContactHEader/ContectHeader";
import Button from "./Component/Button/Button";
import ContectFrom from "./Component/ContectForm/ContectForm";

function App() {
  return (
    <>
      <Nav />
      <ContectHeader />
      <ContectFrom />
    </>
  );
}

export default App;
