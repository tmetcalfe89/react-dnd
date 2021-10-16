import React, { useState } from "react";
import DraggableList from "./components/DraggableList";
import "./App.css";

function App() {
  const [draggables, setDraggables] = useState([
    {
      color: "#41D3BD",
      id: "A",
    },
    {
      color: "#DE6449",
      id: "B",
    },
    {
      color: "#407899",
      id: "C",
    },
  ]);

  const onDragStart = (e) => {
    e.dataTransfer.setData("text", e.target.getAttribute("draggable-id"));
  };

  const swap = (e) => {
    const droppedId = e.dataTransfer.getData("text");
    const droppedIntoId = e.target.getAttribute("draggable-id");

    const clone = [...draggables];

    const droppedIndex = clone.findIndex(
      (draggable) => draggable.id === droppedId
    );
    const droppedIntoIndex = clone.findIndex(
      (draggable) => draggable.id === droppedIntoId
    );

    const cachedDropped = clone[droppedIndex];
    const cachedDroppedInto = clone[droppedIntoIndex];

    clone[droppedIndex] = cachedDroppedInto;
    clone[droppedIntoIndex] = cachedDropped;

    setDraggables(clone);
  };

  const insert = (e) => {
    const droppedId = e.dataTransfer.getData("text");
    const droppedIntoId = e.target.getAttribute("draggable-id");

    const clone = [...draggables];

    const droppedIndex = clone.findIndex(
      (draggable) => draggable.id === droppedId
    );
    const cachedDropped = clone.splice(droppedIndex, 1);

    const droppedIntoIndex = clone.findIndex(
      (draggable) => draggable.id === droppedIntoId
    );
    clone.splice(droppedIntoIndex, 0, cachedDropped[0]);

    setDraggables(clone);
  };

  return (
    <div>
      <DraggableList
        list={draggables}
        onDragStart={onDragStart}
        onDrop={insert}
      />
    </div>
  );
}

export default App;
