import { createRoot } from "react-dom/client";
import Square from "./Square";
import { useState } from "react";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [score, setScore] = useState({ x: 0, ties: 0, o: 0 });

  let winner = checkWinner(squares);

  return (
    <div className="flex items-center flex-col">
      <h1 className="my-10 text-4xl">Tic Tac Toe</h1>
      {winner ? (
        <div>
          <p className="">{`The winner is ${winner}`}</p>
          <button className="border border-gray-600 p-2" onClick={resetGame}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="grid grid-cols-3 gap-2">
        {squares.map((value, i) => {
          return (
            <Square
              key={`square-${i}`}
              value={value}
              handleClick={() => clickSquare(i)}
            />
          );
        })}
        <div className="bg-gray-200">
          <p>X</p>
          <p>{score.x}</p>
        </div>
        <div className="bg-gray-200">
          <p>Ties</p>
          <p>{score.ties}</p>
        </div>
        <div className="bg-gray-200">
          <p>O</p>
          <p>{score.o}</p>
        </div>
      </div>
    </div>
  );

  function clickSquare(i) {
    if (squares[i] || checkWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    if (isXNext) {
      newSquares[i] = "x";
    } else {
      newSquares[i] = "o";
    }
    setIsXNext(!isXNext);
    setSquares(newSquares);
  }

  function checkWinner(position) {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPositions.length; i++) {
      let [a, b, c] = winningPositions[i];

      if (
        position[a] &&
        position[a] === position[b] &&
        position[a] === position[c]
      ) {
        return position[a];
      }
    }
  }

  function resetGame() {
    if (winner) {
      score[winner] += 1;
    } else {
      score.ties += 1;
    }
    setScore(score);
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
