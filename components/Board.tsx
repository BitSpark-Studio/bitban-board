import React, { useState } from "react";
import CreateState from "./CreateStage";

export default function Board() {
  const [takeInput, setTakeInput] = useState<Boolean>(false);

  const onAddStageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTakeInput(true);
  };

  const onDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTakeInput(false);
  };

  return (
    <div className="flex flex-row p-10 gap-5">
      {/* conditional div. will only show when Add Stage is clicked */}
      <div>{takeInput && <CreateState onDeleteClick={onDeleteClick} />}</div>
      <button
        onClick={onAddStageClick}
        className="bg-gray-50 w-22 h-12 px-5 py-2 border-2 border-gray-300 border-solid rounded-md shadow-sm"
      >
        + Add Stage
      </button>
    </div>
  );
}
