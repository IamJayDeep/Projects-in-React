import React, { useRef, useState } from "react";

function BgChanger() {
  const [bgColor, setBgColor] = useState("#100232");
  const divRef = useRef(null);

  const handleBgColor = () => {
    let color = "#";
    const value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * value.length);
      color += value[randomIndex];
    }
    setBgColor(color);
    if (divRef.current) {
      divRef.current.style.backgroundColor = color;
    }
  };

  return (
    <>
      <button onClick={handleBgColor}>Random background color</button>
      <div
        ref={divRef}
        style={{ backgroundColor: "gray", width: "500px", height: "500px" }}
      >
        {bgColor}
      </div>
    </>
  );
}

export default BgChanger;
