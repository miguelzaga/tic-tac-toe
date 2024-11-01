import { createRoot } from "react-dom/client";
import { useState } from "react";
import Score from "./Score";
import Header from "./Header";
import Modal from "./Modal";
import Board from "./Board";
import Menu from "./Menu";

const App = () => {
  const [isMainMenu, setIsMainMenu] = useState(true);
  const [isXNext, setIsXNext] = useState(true);
  const [isP1X, setIsP1X] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [score, setScore] = useState({ x: 0, tie: 0, o: 0 });
  const [isAgainstCPU, setIsAgainstCPU] = useState(false);

  let [winner, winningPosition] = checkWinner(squares);

  return (
    <div className="h-full w-full bg-dark-navy">
      <main className="mx-auto max-w-[460px] px-6 pb-32 pt-6">
        {isMainMenu ? (
          <Menu
            isP1X={isP1X}
            setIsP1X={setIsP1X}
            setIsMainMenu={setIsMainMenu}
            setIsAgainstCPU={setIsAgainstCPU}
          />
        ) : (
          <div className="mx-auto w-max">
            <Header isXNext={isXNext} handleReset={resetGame} />
            {winner ? (
              <Modal
                winner={winner}
                handleReset={resetGame}
                handleQuit={quitGame}
                isP1X={isP1X}
              />
            ) : (
              ""
            )}
            <Board
              squares={squares}
              winningPosition={winningPosition}
              clickSquare={clickSquare}
              winner={winner}
              cpuPlay={cpuPlay}
            />
            <Score
              currScore={score}
              isP1X={isP1X}
              isAgainstCPU={isAgainstCPU}
            />
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

  function quitGame() {
    resetGame();
    setScore({ x: 0, tie: 0, o: 0 });
    setIsMainMenu(true);
  }

  function cpuPlay() {
    if (isAgainstCPU && !isMainMenu) {
      if ((isXNext && !isP1X) || (!isXNext && isP1X)) {
        let randomMove = Math.floor(Math.random() * 9);
        while (squares[randomMove]) {
          randomMove = Math.floor(Math.random() * 9);
        }
        clickSquare(randomMove);
      }
    }
  }
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
