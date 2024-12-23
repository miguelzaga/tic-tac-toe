import iconXOutline from "../assets/icon-x-outline.svg";
import iconOOutline from "../assets/icon-o-outline.svg";

export default function Square({ value, handleClick, winner, isXNext }) {
  let icon = getIcon(value);
  let color = getColor(winner);

  return (
    <button
      onClick={handleClick}
      className={`z-0 flex items-center justify-center bg-${color ?? "semi-dark-navy"} shadow-${color ?? "dark-navy"}-shadow group relative h-24 w-full rounded-10 pb-2 shadow-custom-lg md:h-[140px]`}
    >
      {value ? (
        ""
      ) : (
        <img
          className="invisible absolute -z-10 w-10 group-hover:visible md:w-16"
          src={isXNext ? iconXOutline : iconOOutline}
          alt=""
        />
      )}
      {icon ?? ""}
    </button>
  );

  function getIcon(value) {
    let icon;
    if (value === "x") {
      icon = (
        <svg
          viewBox="0 0 65 65"
          xmlns="http://www.w3.org/2000/svg"
          className={`${winner === "x" ? "text-dark-navy" : "text-light-blue"} w-10 md:w-16`}
        >
          <path
            d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
            fill="currentcolor"
            fillRule="evenodd"
          />
        </svg>
      );
    } else if (value === "o") {
      icon = (
        <svg
          viewBox="0 0 65 65"
          xmlns="http://www.w3.org/2000/svg"
          className={`${winner === "o" ? "text-dark-navy" : "text-light-yellow"} w-10 md:w-16`}
        >
          <path
            d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
            fill="currentcolor"
          />
        </svg>
      );
    }

    return icon;
  }

  function getColor(winner) {
    let color;
    if (winner === "x") {
      color = "light-blue";
    } else if (winner === "o") {
      color = "light-yellow";
    }
    return color;
  }
}
