export default function Score({ currScore, isP1X, isAgainstCPU }) {
  const [xTitle, oTitle] = getTitles(isAgainstCPU, isP1X);

  return (
    <div className="child- mt-5 grid grid-cols-3 gap-5">
      <ScoreCell
        title={`X (${xTitle})`}
        score={currScore.x}
        bgColor="bg-light-blue"
      />
      <ScoreCell title="Ties" score={currScore.tie} bgColor="bg-silver" />
      <ScoreCell
        title={`O (${oTitle})`}
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

function getTitles(isAgainstCPU, isP1X) {
  let xTitle;
  let oTitle;

  if (isAgainstCPU) {
    if (isP1X) {
      xTitle = "You";
      oTitle = "CPU";
    } else {
      xTitle = "CPU";
      oTitle = "You";
    }
  } else if (isP1X) {
    xTitle = "P1";
    oTitle = "P2";
  } else {
    xTitle = "P2";
    oTitle = "P1";
  }

  return [xTitle, oTitle];
}
