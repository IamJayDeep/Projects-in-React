import React from "react";
import style from "./nav.module.css";

export default function Nav() {
  console.log(style)
  return (
    <nav className={`${style.navigation} container`}>
      <div>
        <img src="Images/Frame 2 1.png" alt="logo" />
      </div>

      <div className={style.right}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
