import logo from "../assets/logo.svg";
import iconRestart from "../assets/icon-restart.svg";

export default function Header({ isXNext, handleReset }) {
  let turnIcon = getTurnIcon(isXNext);

  return (
    <header className="mb-16 grid grid-cols-3 items-center gap-5 md:mb-[19px]">
      <img src={logo} alt="logo" />
      <div className="flex h-10 w-24 items-center justify-center gap-[9px] rounded-5 bg-semi-dark-navy pb-1 font-bold text-silver shadow-custom-sm shadow-dark-navy-shadow md:h-[52px] md:w-[140px]">
        {turnIcon}
        <span>TURN</span>
      </div>
      <button
        className="ml-auto flex size-10 items-center justify-center rounded-5 bg-silver pb-1 shadow-custom-sm shadow-silver-shadow hover:bg-silver-hover md:size-[52px]"
        onClick={handleReset}
      >
        <img className="size-4 md:size-5" src={iconRestart} alt="restart" />
      </button>
    </header>
  );

  function getTurnIcon(isXNext) {
    if (isXNext) {
      return (
        <svg
          viewBox="0 0 65 65"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 text-silver md:w-5"
        >
          <path
            d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
            fill="currentcolor"
            fillRule="evenodd"
          />
        </svg>
      );
    } else {
      return (
        <svg
          viewBox="0 0 65 65"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 text-silver md:w-5"
        >
          <path
            d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
            fill="currentcolor"
          />
        </svg>
      );
    }
  }
}
