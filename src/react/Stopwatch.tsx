import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div>
      <p>{`${seconds} segundo(s)`}</p>
      <div>
        <button style={{ backgroundColor: 'blue', color: 'white', marginRight: '2px' }} onClick={handleStart}>Start</button>
        <button style={{ backgroundColor: 'blue', color: 'white', marginRight: '2px' }} onClick={handleStop}>Stop</button>
        <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
