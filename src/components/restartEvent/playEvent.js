import React from "react";
import "./playEvent.css";
const PlayEvent = ({ onPlayRestart, isPlaying , hasStarted }) => {
  return (
    <div className="restart-event-container">
      <button className="restart-button" onClick={onPlayRestart}>
        {hasStarted ? "Restart" : "Play"}
      </button>
    </div>
  );
};
export default PlayEvent;
