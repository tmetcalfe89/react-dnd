import React from "react";

function DragTrash({ remove }) {
  return (
    <div
      className="draggable trash"
      onDrop={remove}
      onDragOver={(e) => e.preventDefault()}
    >
      Trash
    </div>
  );
}

export default DragTrash;
