import React from "react";
import useQuery from "./MovieContext";

function Offers() {
  const { queries, info } = useQuery();

  return (
    <div>
      {queries
        .filter((query) => query.imdbId === info.imdbID) // Filter to get the matching query
        .map((query, i) => (
          <div key={i}>
            {query.offers && query.offers.length > 0 ? (
              query.offers.map((offer, j) => (
                <div key={j}>
                  <ul className="flex ml-2 mb-3 text-black font-medium md:ml-10 ">
                    <span>
                      {offer.name}{" "}
                      <span className="flex">
                        Quelity: {offer.type}{" "}
                        <span>
                          <a
                            className="flex text-blue-600 ml-2"
                            href={offer.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click here
                          </a>
                        </span>
                      </span>
                    </span>
                  </ul>
                </div>
              ))
            ) : (
              <div className="text-black font-medium text-base mb-3 flex justify-center">
                <p> Not availave to stream or buy...</p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Offers;
