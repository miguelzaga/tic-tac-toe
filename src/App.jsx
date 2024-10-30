import { createRoot } from "react-dom/client";
import { useState } from "react";
import Score from "./Score";
import Header from "./Header";
import Modal from "./Modal";
import Board from "./Board";
import logo from "../assets/logo.svg";

const App = () => {
  const [isMainMenu, setIsMainMenu] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [score, setScore] = useState({ x: 0, ties: 0, o: 0 });

  let [winner, winningPosition] = checkWinner(squares);

  return (
    <div className="h-screen w-screen bg-dark-navy">
      <main className="mx-auto max-w-[460px] px-6 pb-32 pt-6">
        {isMainMenu ? (
          <div className="mt-[119px] space-y-8">
            <img className="mx-auto" src={logo} alt="logo" />
            <div className="rounded-15 bg-semi-dark-navy p-6 text-center uppercase text-silver shadow-custom-lg shadow-dark-navy-shadow">
              <h1 className="mb-6 font-bold">Pick player 1&apos;s mark</h1>
              <div className="mb-4 rounded-10 bg-dark-navy">
                <button>X</button>
                <button>O</button>
              </div>
              <p className="pt-px text-sm">Remember: X goes first</p>
            </div>
            <div className="flex flex-col gap-4">
              <button
                className="rounded-15 h-14 bg-light-yellow pb-2 font-bold uppercase text-dark-navy shadow-custom-lg shadow-light-yellow-shadow"
                onClick={() => setIsMainMenu(false)}
              >
                New Game (vs CPU)
              </button>
              <button
                className="rounded-15 h-14 bg-light-blue pb-2 font-bold uppercase text-dark-navy shadow-custom-lg shadow-light-blue-shadow"
                onClick={() => setIsMainMenu(false)}
              >
                New Game (vs Player)
              </button>
            </div>
          </div>
        ) : (
          <div className="mx-auto w-max">
            <Header isXNext={isXNext} handleReset={resetGame} />
            {winner ? (
              <Modal
                player={winner}
                handleReset={resetGame}
                handleQuit={() => {
                  resetGame();
                  setIsMainMenu(true);
                }}
              />
            ) : (
              ""
            )}
            <Board
              squares={squares}
              winningPosition={winningPosition}
              clickSquare={clickSquare}
              winner={winner}
            />
            <Score currScore={score} />
          </div>
        )}
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
