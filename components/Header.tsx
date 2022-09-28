import Collaborators from "./Collaborators";

export default function Header() {
  return (
    <div className="flex justify-between h-48 w-full px-10 pt-5 border-r-2 border-b-2">
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
