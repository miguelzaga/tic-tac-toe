import logo from "../assets/logo.svg";
import iconRestart from "../assets/icon-restart.svg";

export default function Header({ isXNext, handleReset }) {
  let nextTurn;
  if (isXNext) {
    nextTurn = "X";
  } else {
    nextTurn = "O";
  }

  return (
    <header className="grid grid-cols-3 gap-5 mb-16">
      <img className="" src={logo} alt="logo" />
      <p className="text-silver font-bold bg-semi-dark-navy w-24 h-10 flex justify-center items-center rounded-md">
        {nextTurn} TURN
      </p>
      <button
        className="bg-silver rounded-md size-10 flex justify-center items-center ml-auto"
        onClick={handleReset}
      >
        <img className="size-4" src={iconRestart} alt="restart" />
      </button>
    </header>
  );
}
