import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MovieProvider } from "./components/MovieContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.jsx";
import Details from "./components/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "info",
        element: <Details />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  </StrictMode>
);
