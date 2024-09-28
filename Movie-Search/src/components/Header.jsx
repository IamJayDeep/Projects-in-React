import React from "react";
import useQuery from "./MovieContext";
import { BiSearch } from "react-icons/bi";

function Header() {
  const { input, setInput } = useQuery();
  const handleSubmit = () => {
    setInput("");
  };
  return (
    <div className="flex justify-around items-center">
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text tracking-wide">Movies & Shows Finder</h2>
      </div>
      <div className="flex items-center text-black ">
        <input
          className="p-1 pl-2 min-w-[400px] outline-2 focus:outline  outline-slate-500 placeholder-zinc-700 placeholder-opacity-95 rounded-"
          type="text"
          value={input}
          placeholder="Type here..."
          onChange={(e) => setInput(e.target.value)}
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
