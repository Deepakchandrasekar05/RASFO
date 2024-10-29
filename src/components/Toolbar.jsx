// src/components/Toolbar.jsx
import React from "react";

const Toolbar = ({ setTool, setColor }) => {
  return (
    <div
      style={{ display: "flex", padding: "10px", backgroundColor: "#f4f4f4" }}
    >
      <button onClick={() => setTool("line")}>Line</button>
      <button onClick={() => setTool("rect")}>Rectangle</button>
      <button onClick={() => setTool("circle")}>Circle</button>
      <input
        type="color"
        onChange={(e) => setColor(e.target.value)}
        title="Pick a color"
        style={{ marginLeft: "10px" }}
      />
      <button onClick={() => setTool("erase")}>Eraser</button>
    </div>
  );
};

export default Toolbar;
