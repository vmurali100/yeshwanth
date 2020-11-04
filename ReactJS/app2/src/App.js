import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./ClickCounter";
import HoveredCount from "./HoveredCount";

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoveredCount />
    </div>
  );
}

export default App;
