export default function Score({ currScore }) {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      <ScoreCell title="X" score={currScore.x} />
      <ScoreCell title="Ties" score={currScore.ties} />
      <ScoreCell title="O" score={currScore.o} />
    </div>
  );
}

function ScoreCell({ title, score }) {
  return (
    <div className="bg-gray-200">
      <p>{title}</p>
      <p>{score}</p>
    </div>
  );
}
