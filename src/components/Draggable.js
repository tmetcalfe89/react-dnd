import React from "react";

function Draggable({ draggable, onDragStart, onDrop }) {
  return (
    <div
      draggable-id={draggable.id}
      style={{ backgroundColor: draggable.color }}
      className="draggable"
      draggable
      onDragOver={(e) => e.preventDefault()}
      onDragStart={onDragStart}
      onDrop={onDrop}
    >
      {draggable.id}
    </div>
  );
}

export default Draggable;
