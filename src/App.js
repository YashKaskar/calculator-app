import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-72 bg-white rounded-lg shadow-md p-4">
        <input
          className="w-full bg-gray-200 border border-gray-300 p-2 mb-2 rounded"
          type="text"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          <button
            className="col-span-2 bg-gray-200 rounded p-2"
            name="7"
            onClick={handleClick}
          >
            7
          </button>
          <button
            className="bg-gray-200 rounded p-2"
            name="8"
            onClick={handleClick}
          >
            8
          </button>
          <button
            className="bg-gray-200 rounded p-2"
            name="9"
            onClick={handleClick}
          >
            9
          </button>
          <button
            className="bg-yellow-400 rounded p-2"
            name="+"
            onClick={handleClick}
          >
            +
          </button>
          <button
            className="bg-gray-200 rounded p-2"
            name="4"
            onClick={handleClick}
          >
            4
          </button>
          <button
            className="bg-gray-200 rounded p-2"
            name="5"
            onClick={handleClick}
          >
            5
          </button>
          <button
            className="bg-gray-200 rounded p-2"
            name="6"
            onClick={handleClick}
          >
            6
          </button>
          <button
            className="bg-yellow-400 rounded p-2"
            name="-"
            onClick={handleClick}
          >
            -
          </button>
          <button
            className="bg-gray-200 rounded p-2"
            name="1"
            onClick={handleClick}
          >
            1
          </button>
          <button
            className="bg-gray-200 rounded p-2"
            name="2"
            onClick={handleClick}
          >
            2
          </button>
          <button
            className="bg-gray-200 rounded p-2"
            name="3"
            onClick={handleClick}
          >
            3
          </button>
          <button
            className="bg-yellow-400 rounded p-2"
            name="*"
            onClick={handleClick}
          >
            *
          </button>
          <button
            className="bg-gray-200 rounded p-2"
            name="0"
            onClick={handleClick}
          >
            0
          </button>
          <button
            className="bg-gray-200 rounded p-2"
            name="."
            onClick={handleClick}
          >
            .
          </button>
          <button
            className="bg-yellow-400 rounded p-2"
            name="/"
            onClick={handleClick}
          >
            /
          </button>
          <button
            className="col-span-2 bg-red-500 text-white rounded p-2"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            className="col-span-4 bg-green-500 text-white rounded p-2"
            onClick={handleCalculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
