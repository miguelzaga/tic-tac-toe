import iconX from "../assets/icon-x.svg";
import iconO from "../assets/icon-o.svg";

export default function Modal({
  winner,
  handleReset,
  handleQuit,
  isP1X,
  isAgainstCPU,
}) {
  let icon = getIcon(winner);
  let textColor = getTextColor(winner);
  let messages = winner && getMessages(isAgainstCPU, winner, isP1X);

  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center bg-black bg-opacity-50 uppercase">
      <div className="flex w-full flex-col items-center bg-semi-dark-navy text-center">
        <div className="pb-12 pt-10">
          <p className="mb-4 font-bold text-silver">
            {messages && messages.playerMsg}
          </p>
          <div className="mb-6 flex items-center justify-center gap-2">
            {icon}
            <p
              className={`text-2xl font-extrabold leading-none tracking-widest ${textColor}`}
            >
              {messages && messages.markMsg}
            </p>
          </div>
          <div className="flex justify-center gap-4 leading-none text-dark-navy">
            <button
              className="h-12 rounded-lg bg-silver p-4 font-bold uppercase shadow-custom-sm shadow-silver-shadow hover:bg-silver-hover"
              onClick={handleQuit}
            >
              {messages.buttonsMsg[0]}
            </button>
            <button
              className="h-12 rounded-lg bg-light-yellow p-4 font-bold uppercase shadow-custom-sm shadow-light-yellow-shadow hover:bg-light-yellow-hover"
              onClick={handleReset}
            >
              {messages.buttonsMsg[1]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  function getTextColor(player) {
    let textColor = "text-silver";
    if (player === "x") {
      textColor = "text-light-blue";
    } else if (player === "o") {
      textColor = "text-light-yellow";
    }
    return textColor;
  }

  function getIcon(player) {
    let icon;
    if (player === "x") {
      icon = iconX;
    } else if (player === "o") {
      icon = iconO;
    } else {
      return;
    }
    return <img className="w-7" src={icon} alt={player} />;
  }

  function getMessages(isAgainstCPU, winner, isP1X) {
    const p1Won = (winner === "x" && isP1X) || (winner === "o" && !isP1X);
    const msgObj = {};

    msgObj["markMsg"] = "takes the round";
    msgObj["buttonsMsg"] = ["quit", "next round"];
    if (isAgainstCPU) {
      if (p1Won) {
        msgObj["playerMsg"] = "You Won!";
      } else if (winner === "tie") {
        msgObj["playerMsg"] = "";
        msgObj["markMsg"] = "Restart game?";
        msgObj["buttonsMsg"] = ["no, cancel", "yes, restart"];
      } else {
        msgObj["playerMsg"] = "Oh no, you lost...";
      }
      return msgObj;
    }

    if (p1Won) {
      msgObj["playerMsg"] = "Player 1 wins!";
    } else if (winner === "tie") {
      msgObj["markMsg"] = "Round tied";
    }
    {
      msgObj["playerMsg"] = "Player 2 wins!";
    }

    console.log(msgObj);

    return msgObj;
  }
}
