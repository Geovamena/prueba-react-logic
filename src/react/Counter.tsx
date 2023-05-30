import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const decrementCount = () => {
    setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={decrementCount}>-</button>
      <span style={{ padding: '4px' }}>{count}</span>
      <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={incrementCount}>+</button>
    </div>
  );
};

export default Counter;
