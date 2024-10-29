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
    <header className="mb-16 grid grid-cols-3 gap-5">
      <img className="" src={logo} alt="logo" />
      <p className="rounded-5 flex h-10 w-24 items-center justify-center bg-semi-dark-navy pb-1 font-bold text-silver shadow-custom-sm shadow-dark-navy-shadow">
        {nextTurn} TURN
      </p>
      <button
        className="rounded-5 ml-auto flex size-10 items-center justify-center bg-silver pb-1 shadow-custom-sm shadow-silver-shadow hover:bg-silver-hover"
        onClick={handleReset}
      >
        <img className="size-4" src={iconRestart} alt="restart" />
      </button>
    </header>
  );
}
