import React, { useState } from "react";
import DraggableList from "./components/DraggableList";
import "./App.css";
import DraggableForm from "./components/DraggableForm";
import DragTrash from "./components/DragTrash";
import randomColor from "randomcolor";
import util from "./util";
import DropOpts from "./components/DropOpts";

function App() {
  const [draggables, setDraggables] = useState([
    {
      color: randomColor(),
      id: util.numberToLetters(0),
    },
    {
      color: randomColor(),
      id: util.numberToLetters(1),
    },
    {
      color: randomColor(),
      id: util.numberToLetters(2),
    },
  ]);
  const [dropOpt, setDropOpt] = useState("swap");

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

  const dropOpts = {
    swap,
    insert,
  };

  const add = (draggable) => {
    setDraggables([
      ...draggables,
      {
        ...draggable,
        id: util.getNextId(draggables),
      },
    ]);
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
      <DropOpts opts={Object.keys(dropOpts)} updateOpt={setDropOpt} />
      <DraggableList
        list={draggables}
        onDragStart={onDragStart}
        onDrop={dropOpts[dropOpt]}
      />
      <DragTrash remove={remove} />
    </div>
  );
}

export default App;
