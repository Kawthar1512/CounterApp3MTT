import React, { useState } from 'react';
import './ClickCounter.css';

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const limit = 10;

  const handleIncrease = () => setCount(prev => prev + 1);
  const handleDecrease = () => {
    if (count > 0) setCount(prev => prev - 1);
  };

  return (
    <div className="counter-wrapper">
      <h1>Click Counter</h1>
      <div className="count-display">{count}</div>

      {count === limit && (
        <p className="limit-text">🎯 You've reached the limit!</p>
      )}

      <div className="button-group">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease} disabled={count === 0}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default ClickCounter;
