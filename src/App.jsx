import { createRoot } from "react-dom/client";
import Square from "./Square";
import { useState } from "react";

const App = () => {
  const [squares, setSquares] = useState(Array(8).fill(null));

  return (
    <>
      <h1 className="text-center my-10 text-4xl">Tic Tac Toe</h1>
      <div className="">
        <div className="w-max m-auto">
          <Square value={squares[0]} handleClick={() => clickSquare(0)} />
          <Square value={squares[1]} handleClick={() => clickSquare(1)} />
          <Square value={squares[2]} handleClick={() => clickSquare(2)} />
        </div>
        <div className="w-max m-auto">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="w-max m-auto">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );

  function clickSquare(i) {
    const newSquares = squares.slice();
    newSquares[i] = "X";
    setSquares(newSquares);
  }
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
