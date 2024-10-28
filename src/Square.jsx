import iconX from "../assets/icon-x.svg";
import iconO from "../assets/icon-o.svg";

export default function Square({ value, handleClick, winner }) {
  let icon = getIcon(value);
  let color = getColor(winner);

  return (
    <button
      onClick={handleClick}
      className={`
        bg-${color ?? "semi-dark-navy"} 
        shadow-${color ?? "dark-navy"}-shadow
        size-24 rounded-lg flex justify-center 
        items-center shadow-custom-lg pb-2`}
    >
      {icon ?? ""}
    </button>
  );

  function getIcon(value) {
    let icon;
    if (value === "x") {
      icon = iconX;
    } else if (value === "o") {
      icon = iconO;
    }
    return (
      <img className="w-10" src={icon} alt={value && value.toUpperCase()} />
    );
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
