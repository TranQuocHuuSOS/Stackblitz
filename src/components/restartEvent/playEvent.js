import React from "react";
import "./playEvent.css";

const PlayEvent = ({ onPlayRestart, isPlaying }) => {
  return (
    <div className="restart-event-container">
      <button className="restart-button" onClick={onPlayRestart}>
        {isPlaying ? "Restart" : "Play"}
      </button>
    </div>
  );
};

export default PlayEvent;
