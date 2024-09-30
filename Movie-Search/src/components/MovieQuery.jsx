import React, { useState } from "react";
import useQuery from "./MovieContext";
import { Link } from "react-router-dom";

function MovieQuery() {
  const { queries, handleClick } = useQuery();
  return (
    <div className="overflow-x-auto hide-scrollbar">
      <div className="flex">
        {queries.map((query, i) => (
          <div key={i}>
            {query.type === "MOVIE" ? (
              <div
                role="button"
                className="img-container rounded-md mx-3 mt-5 bg-zinc-800"
              >
                <img
                  className="max-w-28 rounded-md md:max-w-40"
                  src={query.photo_url[1]}
                  alt={query.title}
                  id={query.imdbId}
                  onClick={handleClick}
                />
                <div className="overlay-sm md:overlay">
                  <span className="rounded-b-md text-xs md:text-sm">{`${query.title} (${query.year})`}</span>
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

export default MovieQuery;
