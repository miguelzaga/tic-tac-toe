import logo from "../assets/logo.svg";

export default function Menu({
  isP1X,
  setIsP1X,
  setIsMainMenu,
  setIsAgainstCPU,
}) {
  return (
    <div className="space-y-8 md:space-y-10">
      <img className="mx-auto" src={logo} alt="logo" />
      <div className="rounded-15 bg-semi-dark-navy p-6 text-center uppercase text-silver shadow-custom-lg shadow-dark-navy-shadow">
        <h1 className="tracking-1 mb-6 font-bold">Pick player 1&apos;s mark</h1>
        <div className="mb-[17px] flex h-[72px] rounded-10 bg-dark-navy px-2 py-[9px]">
          <button
            aria-label="Choose X"
            onClick={() => {
              setIsP1X(true);
            }}
            className={`${isP1X ? "bg-silver text-dark-navy" : "hover:bg-dark-navy-hover"} flex-1 rounded-10 transition ease-out`}
          >
            <svg
              viewBox="0 0 65 65"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto w-8"
            >
              <path
                d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                fill="currentcolor"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button
            aria-label="Choose O"
            onClick={() => {
              setIsP1X(false);
            }}
            className={`${isP1X ? "hover:bg-dark-navy-hover" : "bg-silver text-dark-navy"} flex-1 rounded-10 transition ease-out`}
          >
            {" "}
            <svg
              viewBox="0 0 65 65"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto w-8"
            >
              <path
                d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
                fill="currentcolor"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm tracking-wider">Remember: X goes first</p>
      </div>
      <div className="flex flex-col gap-4 md:gap-5">
        <button
          className="tracking-1 md:tracking-1.25 h-14 rounded-15 bg-light-yellow pb-2 font-bold uppercase text-dark-navy shadow-custom-lg shadow-light-yellow-shadow transition ease-out hover:bg-light-yellow-hover md:h-[67px] md:text-xl"
          onClick={() => {
            setIsMainMenu(false);
            setIsAgainstCPU(true);
          }}
        >
          New Game (vs CPU)
        </button>
        <button
          className="tracking-1 md:tracking-1.25 h-14 rounded-15 bg-light-blue pb-2 font-bold uppercase text-dark-navy shadow-custom-lg shadow-light-blue-shadow transition ease-out hover:bg-light-blue-hover md:h-[67px] md:text-xl"
          onClick={() => {
            setIsMainMenu(false);
            setIsAgainstCPU(false);
          }}
        >
          New Game (vs Player)
        </button>
      </div>
    </div>
  );
}
