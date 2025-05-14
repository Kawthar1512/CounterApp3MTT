import React, { useState } from 'react';
import './ClickCounter.css';

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const limit = 10;

  const increase = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1>Click Counter</h1>
      <p className="count">{count}</p>
      {count === limit && <p className="limit-message">🎉 You've reached the limit!</p>}
      <div className="buttons">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease} disabled={count === 0}>Decrease</button>
      </div>
    </div>
  );
};

export default ClickCounter;
