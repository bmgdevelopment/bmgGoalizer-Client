import React from "react";
import ReactDOM from "react-dom";
import { Goalizer } from "./components/Goalizer";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Goalizer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
