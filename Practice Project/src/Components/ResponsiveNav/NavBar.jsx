import React, { useState } from "react";
import "./style.css";

function NavBar() {
  const [isOpen, SetIsOpen] = useState(false);
  const toggleMenu = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="meu-icon" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu ${isOpen && "open"}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contect</li>
        <li>Sign In</li>
      </ul>
    </div>
  );
}

export default NavBar;
