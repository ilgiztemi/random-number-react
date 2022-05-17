import "./App.css";
import { Generator } from "./components/Generator";
import React, { useState } from "react";

function App() {
  const [output, setOutput] = useState("");
  return (
    <div className="App">
      <h3>Create a project to generate a random number.</h3>
      <div className="header">
        <h2>
          <span>{output}</span>
        </h2>
      </div>
      <Generator output={output} setOutput={setOutput} />
    </div>
  );
}

export default App;
