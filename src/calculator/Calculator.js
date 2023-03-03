import React, { useState, useEffect } from 'react';
import Display from '../display/Display';
import Button from '../button/Button';
import './Calculator.css';

const Calculator = () => {

  const [input, setInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleBackSpaceButtonClick = () => {
    let result = '';
    console.log(errorMsg);
    if (!errorMsg) {
      result = input.slice(0, input.length - 1);
    }
    setErrorMsg('');
    setInput(result);
  };

  const handleClearButtonClick = () => {
    setErrorMsg('');
    setInput('');
  };

  const handleCalculateButtonClick = () => {
    try {
      if (input.includes('/0')) {
        throw new Error("Can't divided by Zero");
      }
      const result = eval(input);
      setErrorMsg('');
      setInput(result.toString());
    } catch (error) {
      const errorMessage = error.toString().split(':')[1].trim();
      console.log(errorMessage);
      console.log(errorMessage == "Can't divided by Zero");
      if (errorMessage == "Can't divided by Zero") {
        setErrorMsg(errorMessage);
        setInput(errorMessage);
      }
    }
  };


  return (
    <>
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <Display value={input} />
        <div className="button-row">
          <Button id="ac" label="AC" onClick={() => handleClearButtonClick()} />
          <Button label="X" onClick={() => handleBackSpaceButtonClick()} />
          <Button label="%" onClick={() => handleButtonClick('%')} />
          <Button label='/' onClick={() => handleButtonClick('/')} />
        </div>
        <div className="button-row">
          <Button label="7" onClick={() => handleButtonClick('7')} />
          <Button label="8" onClick={() => handleButtonClick('8')} />
          <Button label="9" onClick={() => handleButtonClick('9')} />
          <Button label="*" onClick={() => handleButtonClick('*')} />
        </div>
        <div className="button-row">
          <Button label="4" onClick={() => handleButtonClick('4')} />
          <Button label="5" onClick={() => handleButtonClick('5')} />
          <Button label="6" onClick={() => handleButtonClick('6')} />
          <Button label="-" onClick={() => handleButtonClick('-')} />
        </div>
        <div className="button-row">
          <Button label="1" onClick={() => handleButtonClick('1')} />
          <Button label="2" onClick={() => handleButtonClick('2')} />
          <Button label="3" onClick={() => handleButtonClick('3')} />
          <Button label="+" onClick={() => handleButtonClick('+')} />
        </div>
        <div className="button-row">
          <Button id="wide-button" label="0" onClick={() => handleButtonClick('0')} />
          <Button label="." onClick={() => handleButtonClick('.')} />
          <Button id="equal-button" label="=" onClick={() => handleCalculateButtonClick()} />
        </div>
      </div>
    </>
  );
};

export default Calculator;