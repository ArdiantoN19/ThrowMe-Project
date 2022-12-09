/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import bootstrap from "bootstrap";
// Mapbox
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

// Importing Sass with Bootstrap CSS
import "./App.scss";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// @ts-ignore
mapboxgl.workerClass =
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
