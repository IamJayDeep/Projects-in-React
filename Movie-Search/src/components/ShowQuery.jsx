import React from "react";
import useQuery from "./MovieContext";

function ShowQuery() {
  const { queries, setGetId, handleClick } = useQuery();

  return (
    <div className="overflow-x-auto hide-scrollbar">
      <div className="flex flex-shrink-0">
        {queries.map((query, i) => (
          <div
            key={i}
            id={query.imdbId}
            onClick={(e) => setGetId(e.currentTarget.id)}
          >
            {query.type === "SHOW" ? (
              <div className="img-container rounded-md mx-3 mt-5 bg-zinc-800">
                <img
                  className="max-w-28 rounded-md md:max-w-40"
                  src={query.photo_url[1]}
                  alt={query.title}
                  id={query.imdbId}
                  onClick={handleClick}
                />
                <div className="overlay-sm md:overlay">
                  <span className="rounded-b-md text-xs md:text-sm ">{`${query.title} (${query.year})`}</span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowQuery;
