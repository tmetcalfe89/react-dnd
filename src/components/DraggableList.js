import React from "react";
import Draggable from "./Draggable";

function DraggableList({ list, onDragStart, onDrop }) {
  return (
    <div>
      {list.map((draggable) => (
        <Draggable
          key={draggable.id}
          draggable={draggable}
          onDragStart={onDragStart}
          onDrop={onDrop}
        />
      ))}
    </div>
  );
}

export default DraggableList;
