import iconX from "../assets/icon-x.svg";
import iconO from "../assets/icon-o.svg";

export default function Square({ value, handleClick }) {
  let icon;
  if (value === "x") {
    icon = <img className="w-10" src={iconX} alt="X" />;
  } else if (value === "o") {
    icon = <img className="w-10" src={iconO} alt="X" />;
  }
  return (
    <button
      onClick={handleClick}
      className="bg-semi-dark-navy size-24 rounded-lg flex justify-center items-center"
    >
      {icon || ""}
    </button>
  );
}
