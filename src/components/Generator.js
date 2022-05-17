import React, { useState } from "react";
import "../App.css";

export const Generator = ({ output, setOutput }) => {
  const [lower, setLower] = useState("");
  const [upper, setUpper] = useState("");

  const lowerFn = (e) => {
    setLower(e.target.value);
  };
  const upperFn = (e) => {
    setUpper(e.target.value);
  };
  const resetButton = () => {
    if (lower !== "" && upper !== "") {
      setLower("");
      setUpper("");
      // console.log('worked');
    }
  };
  const generateButton = () => {
    setOutput(Math.floor(Math.random() * (upper - lower) + lower));
  };
  return (
    <div className="wrapper">
      <div>
        <label for="">Lower Limit</label>
        <input
          value={lower}
          onChange={lowerFn}
          type="text"
          className="lower"
          placeholder="Enter lower limit"
        />
      </div>
      <div>
        <label for="">Upper limit</label>
        <input
          value={upper}
          onChange={upperFn}
          type="text"
          className="upper"
          placeholder="Enter upper limit"
        />
      </div>
      <div>
        <button onClick={generateButton} type="submit" className="generateBtn">
          Generate
        </button>
        <button onClick={resetButton} type="reset" className="clearBtn">
          Clear
        </button>
      </div>
    </div>
  );
};
