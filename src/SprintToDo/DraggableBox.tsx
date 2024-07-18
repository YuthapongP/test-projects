// DraggableBox.tsx
import React from "react";

interface DraggableBoxProps {
  name: string;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, name: string) => void;
}

const DraggableBox: React.FC<DraggableBoxProps> = ({ name, onDragStart }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    onDragStart(e, name);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{
        backgroundColor: "pink",
        width: "200px",
        padding: "10px",
        marginBottom: "5px",
        cursor: "move",
      }}
    >
      {name}
    </div>
  );
};

export default DraggableBox;
