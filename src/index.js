import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import EventListView from "./Pages/EventListView";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorView";
import EventDetailView from "./Pages/EventDetailView";

import { Helmet, HelmetProvider } from 'react-helmet-async';
import Toolkit from "./Pages/toolkit";


axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common["Authorization"] = 'Token ' + process.env.REACT_APP_API_KEY;
axios.defaults.headers.post["Content-Type"] = "application/json";

const router = createHashRouter([
  {
    path: "/",
    element: <Toolkit />,
    errorElement: <ErrorPage />,
  }
]);

const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
