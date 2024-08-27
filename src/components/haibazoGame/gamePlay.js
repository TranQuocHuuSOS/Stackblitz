import React, { useState } from "react";
import Header from "../header/header";
import "./haibazo.css";
import GameScreen from "../gameScreen/gameScreen";
const GamePlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [number, setNumber] = useState(0);
  const [lastNumber, setLastNumber] = useState(0);
  const [resetTime, setResetTime] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const handlePlayRestart = () => {
    if (inputValue <= 0) {
      setErrorMessage("Vui lòng nhập số lớn hơn 0");
      return;
    }
    const newNumber = inputValue !== 0 ? inputValue : lastNumber;
    setIsPlaying(true);
    setNumber(newNumber);
    setLastNumber(newNumber);
    setResetTime(true);
    setError("");
    setSuccess(false);
    setErrorMessage("");
    setHasStarted(true);
    if (success || error) {
      setHasStarted(false);
      setTimeout(() => {
        setHasStarted(true);
      }, 0);
    }
  };
  const handleNumberChange = (e) => {
    setInputValue(Number(e.target.value) || 0);
  };
  const handleGameOver = (status) => {
    setIsPlaying(false);
    if (status) {
      setSuccess(true);
    } else {
      setError("GAME OVER");
    }
  };
  return (
    <div className="gameplay-container">
      <Header
        number={inputValue}
        onPlayRestart={handlePlayRestart}
        isPlaying={isPlaying}
        onNumberChange={handleNumberChange}
        resetTime={resetTime}
        setResetTime={setResetTime}
        hasStarted={hasStarted}
        error={error}
        success={success}
      />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">ALL CLEARED</div>}
      <GameScreen
        number={number}
        onGameOver={handleGameOver}
        reset={resetTime}
        hasStarted={isPlaying}
      />
    </div>
  );
};
export default GamePlay;
