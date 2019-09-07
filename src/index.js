import React from "react";
import ReactDOM from "react-dom";
import Child from "./Child";

import "./styles.css";

function App() {
  return <Child />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
