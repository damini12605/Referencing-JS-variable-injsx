import React from "react";
import "./styles.css";

function getButtonText() {
  return "Click on Me!";
}

export default function App() {
  return (
    <div className="App">
      <label>Enter Name:</label>
      <input />
      <button>{getButtonText()}</button>
    </div>
  );
}
