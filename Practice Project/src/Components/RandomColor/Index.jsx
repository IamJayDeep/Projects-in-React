import React, { useEffect, useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor);
    // console.log(hexColor);
  };
  const randomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r},${g},${b})`;
    setColor(rgbColor);
    // console.log(rgbColor);
  };
  useEffect(() => {
    if (colorType === "hex") {
      randomHexColor();
    } else {
      randomRgbColor();
    }
  }, [colorType]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <button onClick={() => setColorType("hex")}>Random HEX Color</button>
      <button onClick={() => setColorType("rgb")}>Random RGB Color</button>
      <button onClick={colorType === "hex" ? randomHexColor : randomRgbColor}>
        Random color
      </button>

      <div>
        <h2>{color}</h2>
      </div>
    </div>
  );
}
