import React from "react";
import ReactDOM from "react-dom";
import ReadMore from "./Child";

import "./styles.css";

function App() {
  return <ReadMore />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
