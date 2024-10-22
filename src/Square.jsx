export default function Square({ value, handleClick }) {
  return (
    <button onClick={handleClick} className="border size-10">
      {value}
    </button>
  );
}
