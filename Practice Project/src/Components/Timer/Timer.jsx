import React, { useEffect, useState } from "react";

function Timer() {
  const [time, settime] = useState(60);

  useEffect(() => {
    const time = setTimeout(() => settime((prevTime) => prevTime - 1), 1000);
    return () => clearTimeout(time);
  }, [time]);

  return (
    <div>
      <p>Time Left: {time} Sec.</p>
    </div>
  );
}

export default Timer;
