import React from "react";

function DropOpts({ opts, updateOpt }) {
  return (
    <select onChange={(e) => updateOpt(e.target.value)}>
      {opts.map((opt) => (
        <option>{opt}</option>
      ))}
    </select>
  );
}

export default DropOpts;
