import React from "react";
import useQuery from "./MovieContext";
import { BiSearch } from "react-icons/bi";

function Header() {
  const { input, setInput, setClassName } = useQuery();
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setInput(input);
  };
  return (
    <div className="sticky top-0 left-0 w-full flex flex-col  justify-center items-center gap-4 md:flex-row md:justify-around z-10 bg-[#121212] py-5 backdrop-blur bg-opacity-75">
      <div>
        <h2
          className="text-[28px] font-bold bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text tracking-wide md:text-3xl"
          style={{
            textShadow: "2px 2px 0 rgba(255, 255, 255, 0.855) ",
          }}
        >
          PopcornPlanet
        </h2>
      </div>
      <div className="flex items-center text-black">
        <input
          className="p-1 pl-2 md:min-w-[400px] outline-2 focus:outline  outline-slate-500 placeholder-zinc-700 placeholder-opacity-95 rounded-sm"
          type="text"
          value={input}
          placeholder="Type here..."
          onChange={(e) => handleChange(e)}
        />
        <button
          className="p-2 ml-1 bg-white text-black hover:bg-slate-300 hover:scale-105 rounded-sm"
          onClick={handleSubmit}
        >
          <BiSearch />
        </button>
      </div>
    </div>
  );
}

export default Header;
