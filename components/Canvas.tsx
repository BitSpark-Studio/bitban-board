import Board from "./Board";
import Header from "./Header";

export default function Canvas() {
  return (
    <div className="flex flex-col">
      <Header />
      <Board />
    </div>
  );
}
