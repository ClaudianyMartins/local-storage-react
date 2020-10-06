import React from "react";
import "./styles.css";
import Home from "./components/home/index";
import Lista from "./components/lista/index";

export default function App() {
  return (
    <div className="App">
      <Home />
      <Lista />
    </div>
  );
}
