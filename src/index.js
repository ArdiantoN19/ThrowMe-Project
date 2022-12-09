/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import bootstrap from "bootstrap";
// Importing Sass with Bootstrap CSS
import "./App.scss";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
