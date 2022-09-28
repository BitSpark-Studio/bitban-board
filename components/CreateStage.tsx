import Image from "next/image";
import { MouseEventHandler, useRef } from "react";
import trash from "../public/svg/trash.svg";

interface stateProps {
  onDeleteClick: MouseEventHandler<HTMLButtonElement>;
}

const CreateState = ({ onDeleteClick }: stateProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-gray-50 w-52 p-4 border-2 border-gray-300 shadow-md rounded-md">
      <p>Title:</p>
      <input
        type="text"
        ref={inputRef}
        className="w-44 border-2 shadow-sm rounded-md h-8 px-3"
      />
      <div className="flex gap-3 mt-5">
        <button
          onClick={onDeleteClick}
          className="flex w-10 p-2 bg-red-50 justify-center border-2 border-red-300 shadow-sm rounded-md"
        >
          <Image src={trash} alt="delete" />
        </button>
        <button className="flex-1 bg-sky-50 border-2 border-sky-300 text-sky-400 font-bold shadow-sm rounded-md">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateState;
