import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <input type="color" onChange={handleColor} />
      <div
        style={{ width: "100px", height: "100px", backgroundColor: color }}
      ></div>
    </div>
  );
}

export default ColorPicker;
