import React from "react";
import { useTheme } from "./ThemeContext";
import './style.css'

function Theme() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"}
      </button>
      <p className={`${isDarkMode ? "dark" : "light"}`}>
        This is {isDarkMode ? "Dark" : "Light"}.
      </p>
    </div>
  );
}

export default Theme;
