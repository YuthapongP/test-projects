// ChildBox.js
import React from "react";
import { useDrag } from "react-dnd";

const ChildBox = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "box", // Define a type for the draggable item
    item: { name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        backgroundColor: "lightblue",
        padding: "10px",
        marginBottom: "5px",
      }}
    >
      {name}
    </div>
  );
};

export default ChildBox;
