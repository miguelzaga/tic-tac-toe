export default function Score({ currScore }) {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5 child-">
      <ScoreCell title="X" score={currScore.x} bgColor="bg-light-blue" />
      <ScoreCell title="Ties" score={currScore.ties} bgColor="bg-silver" />
      <ScoreCell title="O" score={currScore.o} bgColor="bg-light-yellow" />
    </div>
  );
}

function ScoreCell({ title, score, bgColor }) {
  return (
    <div
      className={`py-3 rounded-lg text-center leading-none text-dark-navy ${bgColor}`}
    >
      <p className="uppercase text-xs tracking-wider">{title}</p>
      <p className="text-xl leading-none font-bold">{score}</p>
    </div>
  );
}
