import iconX from "../assets/icon-x.svg";
import iconO from "../assets/icon-o.svg";

export default function Modal({ player, handleReset }) {
  let icon;
  let textColor = "text-silver";
  if (player === "x") {
    icon = <img className="w-7" src={iconX} alt="X" />;
    textColor = "text-light-blue";
  } else if (player === "o") {
    icon = <img className="w-7" src={iconO} alt="X" />;
    textColor = "text-light-yellow";
  }

  return (
    <div className="uppercase absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-50 flex items-center">
      <div className="bg-semi-dark-navy w-full flex flex-col items-center text-center">
        <div className="pt-10 pb-12">
          <p className="mb-4 text-silver font-bold">
            {player === "tie" ? "" : `The winner is ...`}
          </p>
          <div className="flex justify-center items-center mb-6 gap-2">
            {icon}
            <p
              className={`text-2xl leading-none font-extrabold tracking-widest ${textColor}`}
            >
              {player === "tie" ? "Round tied" : "Takes the round"}
            </p>
          </div>
          <div className=" flex gap-4 leading-none justify-center text-dark-navy">
            <button
              className="font-bold uppercase bg-silver h-12 p-4 rounded-lg 
            shadow-custom-sm shadow-silver-shadow
            hover:bg-silver-hover"
            >
              Quit
            </button>
            <button
              className="font-bold uppercase bg-light-yellow h-12 p-4 rounded-lg
              shadow-custom-sm shadow-light-yellow-shadow
              hover:bg-light-yellow-hover"
              onClick={handleReset}
            >
              Next round
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
