import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "../src/components/Pages/HomePage";
import CinemaPage from "../src/components/Pages/CinemaPages";
import MovieListPage from "../src/components/Pages/MovieListPage";
//import App from "./components/App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "list-Movies",
        element: <MovieListPage />,
      },
      {
        path: "add",
        element: <CinemaPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
