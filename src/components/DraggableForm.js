import React, { useState } from "react";

function DraggableForm({ add }) {
  const [color, setColor] = useState("");
  const [id, setId] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    add({ color, id });
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Color"
      />
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID"
      />
      <button>Add</button>
    </form>
  );
}

export default DraggableForm;
