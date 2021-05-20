import React, { useState } from 'react';
import Square from './Square';

function Board(): JSX.Element {
  const [squares, setSquares] = useState(Array(9).fill(''));

  function handleClick(i: number) {
    const newSquares = squares.slice();
    newSquares[i] = 'X';
    setSquares(newSquares);
  }

  function renderSquare(i: number) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }

  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
