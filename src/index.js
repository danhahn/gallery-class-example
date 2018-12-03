import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/Gallery";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Gallery title="Fall 2018" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
