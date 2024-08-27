import React, { useState, useEffect, useCallback } from "react";
import "./gameScreen.css";
const GameScreen = ({ number, onGameOver, reset, hasStarted }) => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [clickedNumbers, setClickedNumbers] = useState([]);
  const [positions, setPositions] = useState([]);
  const [timer, setTimer] = useState(null);
  const circleSize = 50;
  const initializeGame = useCallback(() => {
    setSelectedNumber(1);
    setNumbers(Array.from({ length: number }, (_, i) => number - i));
    setClickedNumbers([]);
    const newPositions = Array.from({ length: number }, () => ({
      top: Math.random() * (100 - circleSize / 4),
      left: Math.random() * (100 - circleSize / 4)
    }));
    setPositions(newPositions);
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
    if (hasStarted) {
      const newTimer = setInterval(() => {
        // Timer logic here
      }, 1000);
      setTimer(newTimer);
    }
  }, [number, hasStarted, timer]);
  useEffect(() => {
    if (reset) {
      initializeGame();
    }
  }, [initializeGame, reset]);
  const handleClick = (num) => {
    if (num === selectedNumber) {
      setClickedNumbers((prev) => [...prev, num]);
      setSelectedNumber((prev) => prev + 1);
      setTimeout(() => {
        setNumbers((prev) => prev.filter((n) => n !== num));
        if (numbers.length === 1 && clickedNumbers.length + 1 === number) {
          onGameOver(true);
        }
      }, 2000);
    } else {
      onGameOver(false);
    }
  };
  useEffect(() => {
    if (numbers.length === 0 && clickedNumbers.length === number) {
      onGameOver(true);
    }
  }, [numbers, clickedNumbers, number, onGameOver]);
  return (
    <div className="game-screen-container">
      {numbers.map((num) => {
        const position = positions[number - num];
        const isClicked = clickedNumbers.includes(num);
        const style = position
          ? {
              top: `${position.top}%`,
              left: `${position.left}%`,
              backgroundColor: isClicked ? "green" : "blue",
              opacity: isClicked ? 0.5 : 1
            }
          : {};
        return (
          <div
            key={num}
            className="circle"
            style={style}
            onClick={() => handleClick(num)}
          >
            {num}
          </div>
        );
      })}
    </div>
  );
};
export default GameScreen;
