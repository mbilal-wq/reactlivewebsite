import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter basename="/reactlivewebsite">
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
