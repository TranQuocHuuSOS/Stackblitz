import React, { useState, useEffect } from "react";
import "./timer.css";

const Timer = ({ isPlaying, resetTime, setResetTime }) => {
  const [time, setTime] = useState(0.0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 0.1);
      }, 100);
    } else {
      clearInterval(interval);
    }
    if (resetTime) {
      setTime(0.0);
      setResetTime(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, resetTime, setResetTime]);

  return (
    <div className="timer-container">
      <span className="timer-title">Timer:</span>
      <span className="timer-display">{time.toFixed(1)}s</span>
    </div>
  );
};

export default Timer;
