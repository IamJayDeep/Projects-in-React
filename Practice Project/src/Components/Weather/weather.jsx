import React, { useEffect, useState } from "react";

function weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetch()
          .then((res) => res.json())
          .then((data) => setWeather(data));
      });
    }
  });
  return <div>weather</div>;
}

export default weather;
