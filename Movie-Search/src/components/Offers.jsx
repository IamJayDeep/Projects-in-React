import React from "react";
import useQuery from "./MovieContext";

function Offers() {
  const { queries, info } = useQuery();
  const validTypes = [
    "FLATRATE SD",
    "FLATRATE HD",
    "FLATRATE _4K",
    "FREE SD",
    "FREE HD",
    "FREE _4K",
    "ADS SD",
    "ADS HD",
    "ADS _4K",
  ];
  return (
    <div>
      {queries.map((query, i) => (
        <div key={i}>{query.Offers.map((offer, i) => (
          <div key={i}>
            {validTypes.includes(offer.type) && (
              <div>
                <p>{offer.name}</p>
              </div>
            )}
          </div>
        ))}</div>
      ))}
    </div>
  );
}

export default Offers;
