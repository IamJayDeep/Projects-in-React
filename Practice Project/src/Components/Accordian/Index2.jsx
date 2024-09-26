import React, { useState } from "react";
import data from "./data";
import "./style.css";

function Index2() {
  const [selected, setSelected] = useState([]);

  const handleClick = (index) => {
    // setSelected(index === selected ? null : index);
    setSelected((prev) =>
      prev.includes(index)
        ? prev.filter((id) => id !== index)
        : [...prev, index]
    );
  };
  return (
    <div>
      {data.map((data, index) => (
        <div key={index}>
          <p>
            {data.question} <span onClick={() => handleClick(index)}>+</span>
          </p>
          {selected.includes(index) ? <p>{data.answer}</p> : ""}
        </div>
      ))}
    </div>
  );
}

export default Index2;
