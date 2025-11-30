import React from "react";
import ReactDOM from "react-dom/client";
import AddPizzaPage from "../src/components/pages/AddPizzaPage";
import HomePage from "./components/pages/HomePage";
import "./index.css";
import { RouterProvider , createBrowserRouter } from "react-router-dom";
import App from "./components/App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"",
        element: <HomePage />,
      },
      {
        path: "add-pizza",
        element: <AddPizzaPage/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
) ;


