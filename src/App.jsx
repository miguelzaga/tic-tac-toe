import { createRoot } from "react-dom/client";
import Square from "./Square";
import { useState } from "react";
import Score from "./Score";
import Header from "./Header";
import Modal from "./Modal";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [score, setScore] = useState({ x: 0, ties: 0, o: 0 });

  let [winner, winningPosition] = checkWinner(squares);

  return (
    <div className="bg-dark-navy h-screen w-screen">
      <main className="w-max mx-auto pt-6 px-6 pb-32">
        <Header isXNext={isXNext} handleReset={resetGame} />
        {winner ? <Modal player={winner} handleReset={resetGame} /> : ""}

        <div className="grid grid-cols-3 gap-5">
          {squares.map((value, i) => {
            let winnerPosition;
            if (winningPosition && winningPosition.includes(i)) {
              winnerPosition = winner;
            }
            return (
              <Square
                key={`square-${i}`}
                value={value}
                handleClick={() => clickSquare(i)}
                winner={winnerPosition}
              />
            );
          })}
        </div>
        <Score currScore={score} />
      </main>
    </div>
  );

  function clickSquare(i) {
    if (squares[i] || winner) {
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
        return [position[a], winningPositions[i]];
      }
    }

    for (let i = 0; i < position.length; i++) {
      if (!position[i]) {
        return [null, null];
      }
    }
    return ["tie", null];
  }

  function resetGame() {
    if (winner) {
      score[winner] += 1;
    }

    setScore(score);
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
