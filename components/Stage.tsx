import AddCardButton from "./AddCardButton";
import Card from "./Card";

export default function Stage() {
  return (
    <div>
      <h4>Stage Name - counts</h4>
      <button>+</button>
      <Card />
      <Card />
      <Card />
      <Card />
      <AddCardButton />
    </div>
  );
}
