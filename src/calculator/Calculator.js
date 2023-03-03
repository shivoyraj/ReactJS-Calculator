import React, { useState } from 'react';
import Display from '../display/Display';
import Button from '../button/Button';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClearButtonClick = () => {
    setInput('');
  };

  const handleCalculateButtonClick = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="button-row">
        <Button label="AC" onClick={() => handleClearButtonClick()} />
        <Button label="X" />
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
        <Button label="0" onClick={() => handleButtonClick('0')} />
        <Button label="." onClick={() => handleButtonClick('.')} />
        <Button label="=" onClick={() => handleCalculateButtonClick()} />
      </div>
    </div>
  );
};

export default Calculator;