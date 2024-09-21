import { useState } from "react";
import Accordian from "./Components/Accordian";
import "./App.css";
import RandomColor from "./Components/RandomColor/Index";
import StarRating from "./Components/Star-Rating/StarRating";
import Input from "./Components/Input/Input";
import Toggle from "./Components/Toggle/Toggle";
import FetchApi from "./Components/Fetch API/FetchApi";
import Timer from "./Components/Timer/Timer";
import Todo from "./Components/TODO/todo";
import BgChanger from "./Components/BgChanger/BgChanger";
import Router from "./Components/Router/Router";
import FileUploader from "./Components/FileUploader/FileUploader";
import Login from "./Components/Login/Login";
import Search from "./Components/Search/Search";
import Pagination from "./Components/Pagination/Pagination";
import data from "./Components/Search/data";
import ColorPicker from "./Components/ColorPicker/ColorPicker";
import NavBar from "./Components/ResponsiveNav/NavBar";
import { ThemeProvider } from "./Components/ThemeContext/ThemeContext";
import Theme from "./Components/ThemeContext/Theme";

function App() {
  return (
    <div>
      {/* Accordian */}
      {/* <Accordian />  */}

      {/* Random Color generator */}
      {/* <RandomColor /> */}

      {/* <StarRating noOfStar={10}/> */}

      {/* <Input /> */}

      {/* <Toggle /> */}

      {/* <FetchApi /> */}

      {/* <Timer /> */}

      {/* <Todo /> */}

      {/* <BgChanger /> */}

      {/* <Router /> */}

      {/* <FileUploader /> */}

      {/* <Login /> */}
      {/* <Search /> */}

      {/* <Pagination data={data} itemPerPage={3} /> */}

      {/* <ColorPicker /> */}

      {/* <NavBar /> */}

      {/* <ThemeProvider>
        <div>
          <Theme />
        </div>
      </ThemeProvider> */}
      console.log(<App />);
    </div>
  );
}

export default App;
