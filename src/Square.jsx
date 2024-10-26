import iconX from "../assets/icon-x.svg";
import iconO from "../assets/icon-o.svg";

export default function Square({ value, handleClick, winner }) {
  let icon;
  if (value === "x") {
    icon = <img className="w-10" src={iconX} alt="X" />;
  } else if (value === "o") {
    icon = <img className="w-10" src={iconO} alt="X" />;
  }
  let color;
  if (winner === "x") {
    color = "light-blue";
  } else if (winner === "o") {
    color = "light-yellow";
  }
  return (
    <button
      onClick={handleClick}
      className={`
        bg-${color ?? "semi-dark-navy"} 
        shadow-${color ?? "dark-navy"}-shadow
        size-24 rounded-lg flex justify-center 
        items-center shadow-custom-lg pb-2`}
    >
      {icon || ""}
    </button>
  );
}
