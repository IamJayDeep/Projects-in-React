import React from "react";
import useQuery from "./MovieContext";
import Offers from "./Offers";

function Details() {
  const { info, queries, className, handleClick } = useQuery();
  console.log(info);
  console.log(queries);

  return (
    <div
      className={`${className} border rounded-md bg-gray-400 backdrop-blur border-zinc-800 bg-opacity-80 absolute inset-0 overflow-auto max-h-screen md:inset-16 hide-scrollbar z-50`}
    >
      <div>
        <span
          className="fixed bg-slate-200 rounded right-0 top-0 cursor-pointer"
          onClick={handleClick}
        >
          <img
            className="w-[30px]"
            src="https://img.icons8.com/ios/50/multiply.png"
            alt="multiply"
          />
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-around px-3">
          <div className="w-1/2 md:w-1/4 mt-4">
            <img
              className="w-full mx-auto my-3 rounded md:max-w-44"
              src={info.Poster}
            />
          </div>
          <div className="w-1/2  text-zinc-800 pl-3 my-auto mx-auto md:w-3/4 md:flex md:flex-row md:justify-between md:items-end md:mt-5">
            <div className="flex">
              <img
                className="w-6 md:w-6 md:h-6"
                src="https://img.icons8.com/fluency/48/star--v1.png"
                alt="star--v1"
              />
              <p className="text-sm font-medium">: {info.imdbRating}/10</p>
            </div>

            <div className="metascore flex mt-1 md:pt-0">
              <img
                className="w-6 md:w-6"
                src="https://img.icons8.com/color/48/metascore.png"
                alt="metascore"
              />
              <p className="text-sm font-medium">: {info.Metascore}</p>
            </div>
            <div className="text-sm mt-3 md:mt-0">
              <span className="border rounded px-2 py-1 font-medium">
                {info.Type}
              </span>
            </div>
            <div className="text-sm max-w-24 mt-3 line-clamp-4 font-medium md:hidden">
              <span> {info.Genre} </span>
            </div>
            <div className="text-sm max-w-20 font-medium mt-3 md:m-0">
              <span>Runtime: {info.Runtime}</span>
            </div>
          </div>
          <div className="">
            <p>1234</p>
          </div>
        </div>
        <hr className="hidden md:block mx-3 my-2 border-zinc-900" />

        <hr className="mx-3 my-2 border-zinc-900 md:mx-10" />
        <h3 className="text-base text-center text-black font-bold">{`${info.Title} (${info.Year})`}</h3>
        <div className="mt-2 mb-1 md:mx-10">
          <div className="text-sm mx-4 text-zinc-900 font-medium ">
            <p>
              Released:
              <span className="text-zinc-700"> {info.Released}</span>
            </p>
            <p>
              Country:
              <span className="text-zinc-700"> {info.Country}</span>
            </p>
            <p>
              Language:
              <span className="text-zinc-700"> {info.Language}</span>
            </p>
            <p>
              Genre:
              <span className="text-zinc-700"> {info.Genre}</span>
            </p>
            <p>
              Rated:
              <span className="text-zinc-700"> {info.Rated}</span>
            </p>
          </div>
          <div className="text-sm mx-4 mt-4 text-zinc-900 font-medium">
            <p>
              Director:
              <span className="text-zinc-700"> {info.Director}</span>
            </p>
            <p>
              Writer:
              <span className="text-zinc-700"> {info.Writer}</span>
            </p>
            <p>
              Actors:
              <span className="text-zinc-700"> {info.Actors}</span>
            </p>
          </div>
          <div className="text-sm mx-4 mt-4 text-zinc-900 font-medium">
            <p>
              Plot:
              <span className="text-zinc-700 line-clamp-[10] md:line-clamp-none">
                {info.Plot}
              </span>
            </p>
          </div>
          <div className="text-sm mx-4 mt-4 text-zinc-900 font-medium">
            <p>
              Awards: <span className="text-zinc-700 ">{info.Awards}</span>
            </p>
            <p>
              BoxOffice:{" "}
              <span className="text-zinc-700">{info.BoxOffice || "N/A"}</span>
            </p>
          </div>
        </div>
        <hr className="mx-3 mt-2 mb-4 border-zinc-900 md:mx-10" />
        <div className="mx-3">
          <h3 className="text-center text-base font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-800 text-transparent bg-clip-text tracking-wide">
            Where to Watch...
          </h3>
          <div>
            <div className="flex">
              <a
                href="http://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="40" src="./Images/Prime.png" alt="" />
              </a>
              {/* <Offers /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
