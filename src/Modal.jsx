import iconX from "../assets/icon-x.svg";
import iconO from "../assets/icon-o.svg";

export default function Modal({ player, handleReset }) {
  let icon = getIcon(player);
  let textColor = getTextColor(player);

  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center bg-black bg-opacity-50 uppercase">
      <div className="flex w-full flex-col items-center bg-semi-dark-navy text-center">
        <div className="pb-12 pt-10">
          <p className="mb-4 font-bold text-silver">
            {player === "tie" ? "" : `The winner is ...`}
          </p>
          <div className="mb-6 flex items-center justify-center gap-2">
            {icon}
            <p
              className={`text-2xl font-extrabold leading-none tracking-widest ${textColor}`}
            >
              {player === "tie" ? "Round tied" : "Takes the round"}
            </p>
          </div>
          <div className="flex justify-center gap-4 leading-none text-dark-navy">
            <button className="h-12 rounded-lg bg-silver p-4 font-bold uppercase shadow-custom-sm shadow-silver-shadow hover:bg-silver-hover">
              Quit
            </button>
            <button
              className="h-12 rounded-lg bg-light-yellow p-4 font-bold uppercase shadow-custom-sm shadow-light-yellow-shadow hover:bg-light-yellow-hover"
              onClick={handleReset}
            >
              Next round
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
    }
    return <img className="w-7" src={icon} alt={player} />;
  }
}
