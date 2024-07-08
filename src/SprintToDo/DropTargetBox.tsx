// DropTargetBox.tsx
import React, { useState } from "react";

interface DropTargetBoxProps {
  name: string;
  onDrop: (itemName: string) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  isDragging: boolean;
  children: React.ReactNode;
}

const DropTargetBox: React.FC<DropTargetBoxProps> = ({
  name,
  onDrop,
  children,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isMouseUp, setIsMouseUp] = useState(true);
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default behavior to enable dropping
    setIsDragging(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const droppedItemName = e.dataTransfer.getData("text");
    onDrop(droppedItemName);
    setIsDragging(false);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      style={{
        border: "1px dashed black",
        padding: "10px",
        marginBottom: "10px",
        minWidth: "200px",
        backgroundColor: isDragging && isMouseUp ? "gray" : "white",
      }}
    >
      <strong>{name}</strong>
      <div>{children}</div>
    </div>
  );
};

export default DropTargetBox;
