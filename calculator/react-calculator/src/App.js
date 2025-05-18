import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Simple Calculator</h2>
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: '200px', height: '30px', fontSize: '20px', textAlign: 'right' }}
      />
      <div style={{ marginTop: '10px' }}>
        {['9','8','7','6','5','4','3','2','1','0','+','-','*','/','.','='].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === '=' ? handleEqual() : handleClick(btn))}
            style={{ width: '45px', height: '45px', margin: '5px', fontSize: '18px' }}
          >
            {btn}
          </button>
        ))}
        <div>
          <button
            onClick={handleClear}
            style={{
              width: '190px',
              height: '45px',
              marginTop: '10px',
              backgroundColor: 'red',
              color: 'white',
              fontSize: '18px'
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
