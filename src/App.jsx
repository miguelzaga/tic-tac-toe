import { createRoot } from "react-dom/client";

const App = () => {
  return <h1 className="font-medium text-blue-900 text-xl">Tic Tac Toe</h1>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
