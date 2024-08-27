import React from "react";
import "./header.css";
import InputNumber from "../inputNumber/inputNumber";
import Timer from "../timer/timer";
import PlayEvent from "../restartEvent/playEvent";
const Header = ({
  number,
  onPlayRestart,
  isPlaying,
  onNumberChange,
  resetTime,
  setResetTime,
  hasStarted
}) => {
  return (
    <div className="header">
      <div className="header-values">
        <h1>LET'S PLAY</h1>
      </div>
      <div className="header-values">
        <InputNumber value={number} onChange={onNumberChange} />
      </div>
      <div className="header-values">
        <Timer
          isPlaying={isPlaying}
          resetTime={resetTime}
          setResetTime={setResetTime}
        />
      </div>
      <div className="header-values">
        <PlayEvent
          onPlayRestart={onPlayRestart}
          isPlaying={isPlaying}
          hasStarted={hasStarted}
        />
      </div>
    </div>
  );
};
export default Header;
