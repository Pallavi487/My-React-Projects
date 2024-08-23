import React, { useState } from "react";

const CalculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const TicTacBoard = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(true);

  const handleClick = (index) => {
    if (CalculateWinner(squares) || squares[index]) return;
    const newSquares = squares.slice();
    newSquares[index] = isXnext ? "x" : "0";
    setSquares(newSquares);
    setIsXnext(!isXnext);
  };

  const winner = CalculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${isXnext ? "x" : "0"}`;

  const renderSquare = (index) => {
    return (
      <button
        className="w-20 h-20 border-2 border-gray-800 text-3xl font-bold flex items-center justify-center hover:bg-gray-200 focus:outline-none"
        onClick={() => handleClick(index)}
      >
        {squares[index]}
      </button>
    );
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-semibold mb-4">{status}</h1>
      <div className="grid grid-cols-3 gap-1">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default TicTacBoard;
