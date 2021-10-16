import React from "react";
import color from "color-js";
import Color from "color-js";

function Draggable({ draggable, onDragStart, onDrop }) {
  return (
    <div
      draggable-id={draggable.id}
      style={{
        backgroundColor: draggable.color,
        color: Color(draggable.color).getLightness() < 0.5 ? "white" : "black",
      }}
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
