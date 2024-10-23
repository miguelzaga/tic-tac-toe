export default function Square({ value, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-semi-dark-navy size-24 rounded-lg"
    >
      {value}
    </button>
  );
}
