import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./style.css";
import Score from "./components/Score";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Square from "./components/Square";
import Menu from "./components/Menu";

const App = () => {
  const [isMainMenu, setIsMainMenu] = useState(true);
  const [isXNext, setIsXNext] = useState(true);
  const [isP1X, setIsP1X] = useState(false);
  const [isAgainstCPU, setIsAgainstCPU] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [score, setScore] = useState({ x: 0, tie: 0, o: 0 });

  let [winner, winningPosition] = checkWinner(squares);
  const isP1Turn = (isXNext && isP1X) || (!isXNext && !isP1X);

  cpuPlay();

  return (
    <div className="flex h-full min-h-screen w-full items-center bg-dark-navy p-6">
      <main className="mx-auto w-full max-w-[328px] md:max-w-[460px]">
        {isMainMenu ? (
          <Menu
            isP1X={isP1X}
            setIsP1X={setIsP1X}
            setIsMainMenu={setIsMainMenu}
            setIsAgainstCPU={setIsAgainstCPU}
            cpuPlay={cpuPlay}
          />
        ) : (
          <div className="mx-auto">
            <Header isXNext={isXNext} handleReset={resetGame} />
            {winner ? (
              <Modal
                winner={winner}
                handleReset={resetGame}
                handleQuit={quitGame}
                isP1X={isP1X}
                isAgainstCPU={isAgainstCPU}
              />
            ) : (
              ""
            )}

            <div className="grid grid-cols-3 grid-rows-3 gap-5">
              {squares.map((value, i) => {
                let winnerPosition;
                if (winningPosition && winningPosition.includes(i)) {
                  winnerPosition = winner;
                }
                return (
                  <Square
                    key={`square-${i}`}
                    value={value}
                    isXNext={isXNext}
                    handleClick={() => {
                      if (!isAgainstCPU || (isAgainstCPU && isP1Turn)) {
                        clickSquare(i);
                      }
                    }}
                    winner={winnerPosition}
                  />
                );
              })}
            </div>
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
    if (isAgainstCPU && !isP1Turn) {
      let move = getOptimalMove();
      if (move === undefined) {
        let availableSquares = squares.reduce((currArr, squareVal, i) => {
          if (!squareVal) {
            currArr.push(i);
          }
          return currArr;
        }, []);

        let randomIndex = Math.floor(Math.random() * availableSquares.length);
        move = availableSquares[randomIndex];
      }
      setTimeout(() => {
        clickSquare(move);
      }, 300);
    }
  }

  function getOptimalMove() {
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

    let closePositions = winningPositions.reduce((result, position) => {
      let [a, b, c] = position;
      if (squares[a] && squares[a] === squares[b] && !squares[c]) {
        let mark = squares[a];
        let empty = c;
        if (result[mark]) {
          result[mark].push[empty];
        } else {
          result[mark] = [empty];
        }
      }
      if (squares[a] && squares[a] === squares[c] && !squares[b]) {
        let mark = squares[a];
        let empty = b;

        if (result[mark]) {
          result[mark].push[b];
        } else {
          result[mark] = [empty];
        }
      }
      if (squares[b] && squares[b] === squares[c] && !squares[a]) {
        let mark = squares[b];
        let empty = a;

        if (result[mark]) {
          result[mark].push[a];
        } else {
          result[mark] = [empty];
        }
      }

      return result;
    }, {});

    if (isP1X) {
      if (closePositions && closePositions.o) {
        return closePositions.o[0];
      } else if (closePositions && closePositions.x) {
        return closePositions.x[0];
      }
    } else {
      if (closePositions && closePositions.x) {
        return closePositions.x[0];
      } else if (closePositions && closePositions.o) {
        return closePositions.o[0];
      }
    }
  }
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
