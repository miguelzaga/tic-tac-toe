export default function Modal({ status, handleReset }) {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-5 flex items-center">
      <div className="bg-semi-dark-navy w-full flex flex-col items-center text-center">
        <div className="pt-10 pb-12">
          <p className="mb-4">{`The winner is ...`}</p>
          <p className="mb-6">{`${status} takes the round`}</p>
          <div className="flex gap-4 leading-none">
            <button className="bg-silver h-12 p-4 rounded-lg">Quit</button>
            <button
              className="bg-light-yellow h-12 p-4 rounded-lg"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
