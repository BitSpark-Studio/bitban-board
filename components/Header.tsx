import Collaborators from "./Collaborators";

export default function Header() {
  return (
    <div className="flex">
      <div className="">
        <p>Client Projects</p>
        <p className="text-4xl font-bold ">Finance Mobile App</p>
      </div>
      <div>
        <Collaborators />
      </div>
    </div>
  );
}
