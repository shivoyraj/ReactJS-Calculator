import React, { useState } from 'react';
import Display from '../display/Display';
import Button from '../button/Button';
import './Calculator.css';

const Calculator = () => {

  const [input, setInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [badInput, setBadInput] = useState(false);

  const handleButtonClick = (value) => {
    if(!errorMsg)
      setInput((prevInput) => prevInput + value);
  };

  const handleBackSpaceButtonClick = () => {
    let result = '';
    if (!errorMsg) {
      result = input.slice(0, input.length - 1);
    }
    setErrorMsg('');
    setBadInput(false);
    setInput(result);
  };

  const handleClearButtonClick = () => {
    setErrorMsg('');
    setInput('');
    setBadInput(false);
  };

  const handleCalculateButtonClick = () => {
    try {
      // if input contains '%' in end will consider as '/100'
      // else if input contains '%' in end will consider as '/100*'
      let parsedInput = input.replace(/%$/, "/100").replace(/%/g, "/100*");
      console.log(parsedInput);
      const result = eval(parsedInput);
      if (result == 'Infinity') {
        throw new Error("Can't divided by Zero");
      }
      setErrorMsg('');
      setInput(result.toString());
      setBadInput(false);
    } catch (error) {
      const errorMessage = error.toString().split(':')[1].trim();
      if (errorMessage == "Can't divided by Zero") {
        setErrorMsg(errorMessage);
        setInput(errorMessage);
      }
      setBadInput(true);
    }
  };

  return (
    <>
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <Display value={input} isError={badInput} />
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