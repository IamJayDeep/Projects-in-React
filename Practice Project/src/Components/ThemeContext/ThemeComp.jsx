import React from "react";
import { useTheme } from "./ThemeContext";

function ThemeComp() {
  const { isDarkMode } = useTheme();
  return <div>ThemeComp</div>;
}

export default ThemeComp;
