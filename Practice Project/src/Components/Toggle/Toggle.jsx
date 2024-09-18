import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <div>
      <input type="checkbox" id="toggle" onChange={handleToggle} />
      <p>{toggle ? "On" : "Off"}</p>
    </div>
  );
}

export default Toggle;
