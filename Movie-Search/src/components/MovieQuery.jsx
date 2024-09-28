import React from "react";
import useQuery from "./MovieContext";

function MovieQuery() {
  const { queries } = useQuery();
  console.log(queries);
  return (
    <div className="overflow-x-auto hide-scrollbar">
      <div className="flex">
        {queries.map((query, i) => (
          <div key={i}>
            {query.type === "MOVIE" ? (
              <div>
                <div className="img-container rounded-md mx-3 mt-5 bg-zinc-800">
                  <img
                    src={query.photo_url[1]}
                    alt={query.title}
                    className="max-w-28 rounded-md md:max-w-60"
                  />
                  <div className="overlay">
                    <span className="rounded-b-md">{`${query.title} (${query.year})`}</span>
                  </div>
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
