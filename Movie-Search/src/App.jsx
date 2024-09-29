import "./App.css";
import ShowQuery from "./components/ShowQuery";
import MovieQuery from "./components/MovieQuery";
import { Outlet } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <div className="container-lg m-5 relative">
      <Outlet />
      <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-300 text-transparent bg-clip-text tracking-wide md:text-2xl mt-5 pl-5">
        Movies
      </h2>
      <MovieQuery />
      <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-300 text-transparent bg-clip-text tracking-wide md:text-2xl mt-5 pl-5">
        Shows
      </h2>
      <ShowQuery />

      <Details />
    </div>
  );
}

export default App;
