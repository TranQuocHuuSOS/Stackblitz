import React, { useState, useEffect } from "react";
import "./gameScreen.css";

const GameScreen = ({ number, onGameOver, reset }) => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [clickedNumbers, setClickedNumbers] = useState([]);
  const circleSize = 50;

  useEffect(() => {
    if (reset) {
        setSelectedNumber(1);
        setNumbers(Array.from({ length: number }, (_, i) => number - i));
        setClickedNumbers([]);
    }
  }, [number, reset]);

  const handleClick = (num) => {
    if (num === selectedNumber) {
        setClickedNumbers((prev) => [...prev, num]);
      setSelectedNumber((prev) => prev + 1);
      setTimeout(() => {
        setNumbers((prev) => prev.filter((n) => n !== num));
        if (numbers.length === 1 && numbers[0] === selectedNumber) {
          onGameOver(true);
        }
      }, 500);
    } else {
      onGameOver(false);
    }
  };

  return (
    <div className="game-screen-container">
      {numbers.map((num, index) => {
        const maxTop = 100 - circleSize / 4;
        const maxLeft = 100 - circleSize / 4;
        const top = Math.random() * maxTop;
        const left = Math.random() * maxLeft;
        const isClicked = clickedNumbers.includes(num);
        return (
          <div
            key={index}
            className="circle"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              backgroundColor: isClicked ? "green" : "blue",
            }}
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
