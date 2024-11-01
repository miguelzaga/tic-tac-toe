import Square from "./Square";

export default function Board({
  winningPosition,
  clickSquare,
  squares,
  winner,
  cpuPlay,
}) {
  cpuPlay();

  return (
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
  );
}
