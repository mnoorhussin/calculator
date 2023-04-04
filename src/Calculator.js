import React, { useState } from "react";
import * as math from "mathjs";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleEqualsClick = () => {
    try {
      const result = math.evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <input type="text" value={input} readOnly />
      <div className="button-row">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("(")}>(</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick(")")}>)</button>
        <button onClick={() => handleButtonClick("^")}>^</button>
        <button onClick={() => handleButtonClick("%")}>%</button>
        <button onClick={() => setInput("")}>AC</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleEqualsClick()}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
