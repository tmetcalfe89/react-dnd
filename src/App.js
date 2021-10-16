import React, { useState } from "react";
import DraggableList from "./components/DraggableList";
import "./App.css";
import DraggableForm from "./components/DraggableForm";
import DragTrash from "./components/DragTrash";
import randomColor from "randomcolor";

function App() {
  const [draggables, setDraggables] = useState([
    {
      color: randomColor(),
      id: "A",
    },
    {
      color: randomColor(),
      id: "B",
    },
    {
      color: randomColor(),
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

  const add = (draggable) => {
    setDraggables([...draggables, draggable]);
  };

  const remove = (e) => {
    const clone = [...draggables];

    const droppedId = e.dataTransfer.getData("text");
    const droppedIndex = clone.findIndex(
      (draggable) => draggable.id === droppedId
    );

    clone.splice(droppedIndex, 1);

    setDraggables(clone);
  };

  return (
    <div>
      <DraggableForm add={add} />
      <DraggableList
        list={draggables}
        onDragStart={onDragStart}
        onDrop={insert}
      />
      <DragTrash remove={remove} />
    </div>
  );
}

export default App;
