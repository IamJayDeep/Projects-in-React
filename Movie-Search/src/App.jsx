import "./App.css";
import ShowQuery from "./components/ShowQuery";
import MovieQuery from "./components/MovieQuery";
import Header from "./components/Header";

function App() {
  return (
    <div className="container-lg m-5">
      <Header />
      <h2>Movies</h2>
      <MovieQuery />
      <h2>Shows</h2>
      <ShowQuery />
    </div>
  );
}

export default App;
