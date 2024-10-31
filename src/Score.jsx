export default function Score({ currScore, isP1X }) {
  return (
    <div className="child- mt-5 grid grid-cols-3 gap-5">
      <ScoreCell
        title={`X (${isP1X ? "P1" : "P2"})`}
        score={currScore.x}
        bgColor="bg-light-blue"
      />
      <ScoreCell title="Ties" score={currScore.ties} bgColor="bg-silver" />
      <ScoreCell
        title={`O (${!isP1X ? "P1" : "P2"})`}
        score={currScore.o}
        bgColor="bg-light-yellow"
      />
    </div>
  );
}

function ScoreCell({ title, score, bgColor }) {
  return (
    <div
      className={`rounded-10 py-3 text-center leading-none text-dark-navy ${bgColor}`}
    >
      <p className="text-xs uppercase tracking-wider">{title}</p>
      <p className="text-xl font-bold leading-none">{score}</p>
    </div>
  );
}
