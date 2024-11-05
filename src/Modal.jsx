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
    <div className="absolute left-0 top-0 z-20 flex h-screen w-screen items-center bg-black bg-opacity-50 uppercase">
      <div className="flex w-full flex-col items-center bg-semi-dark-navy text-center">
        <div className="pb-12 pt-10 md:p-[45px]">
          <p className="md:tracking-1 mb-4 text-sm font-bold tracking-wider text-silver md:mb-[23px] md:text-base">
            {messages && messages.playerMsg}
          </p>
          <div className="mb-6 flex items-center justify-center gap-2 md:mb-[31px] md:gap-6">
            {icon}
            <p
              className={`md:tracking-2.5 tracking-1.5 text-2xl font-extrabold leading-none md:text-4xl ${textColor}`}
            >
              {messages && messages.markMsg}
            </p>
          </div>
          <div className="flex justify-center gap-4 leading-none text-dark-navy">
            <button
              className="tracking-1 h-12 rounded-[10px] bg-silver p-4 font-bold uppercase shadow-custom-sm shadow-silver-shadow hover:bg-silver-hover"
              onClick={handleQuit}
            >
              {messages.buttonsMsg[0]}
            </button>
            <button
              className="tracking-1 h-12 rounded-[10px] bg-light-yellow p-4 font-bold uppercase shadow-custom-sm shadow-light-yellow-shadow hover:bg-light-yellow-hover"
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
    return <img className="w-7 md:w-16" src={icon} alt={player} />;
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
    } else {
      msgObj["playerMsg"] = "Player 2 wins!";
    }

    return msgObj;
  }
}
