// App.tsx
import React, { useState } from "react";
import DraggableBox from "./DraggableBox";
import DropTargetBox from "./DropTargetBox";

interface Box {
  id: number;
  name: string;
  items: string[];
}

const DndContainer: React.FC = () => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [boxes, setBoxes] = useState<Box[]>([
    { id: 1, name: "To Do", items: ["Item 1", "Item 2"] },
    { id: 2, name: "In Progress", items: ["Item 3", "Item 4"] },
    { id: 3, name: "In Review", items: ["Item 5", "Item 6"] },
    { id: 4, name: "Done", items: ["Item 7", "Item 8"] },
  ]);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    name: string
  ) => {
    setDraggedItem(name);
  };

  const handleDrop = (boxId: number) => {
    if (draggedItem) {
      // Remove the item from its original box
      const updatedBoxes = boxes.map((box) => {
        if (box.items.includes(draggedItem)) {
          return {
            ...box,
            items: box.items.filter((item) => item !== draggedItem),
          };
        }
        return box;
      });

      // Add the item to the target box
      const targetBoxIndex = updatedBoxes.findIndex((box) => box.id === boxId);
      if (targetBoxIndex !== -1) {
        updatedBoxes[targetBoxIndex].items.push(draggedItem);
      }

      // Update state
      setBoxes(updatedBoxes);
      setDraggedItem(null);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default behavior to enable dropping
    setIsDragging(true);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", gap: "20px" }}
    >
      {boxes.map((box) => (
        <DropTargetBox
          key={box.id}
          name={box.name}
          onDrop={() => handleDrop(box.id)}
          // onDragOver={handleDragOver}
          isDragging={isDragging}
          style={{
            width: "200px",
            minHeight: "200px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            backgroundColor: "blue", // Background color of each box
          }}
        >
          {/* Map over items array and render DraggableBox for each item */}
          {box.items.map((item, index) => (
            <DraggableBox
              key={index}
              name={item}
              onDragStart={handleDragStart}
              style={{
                backgroundColor: "red", // Draggable item background color
                padding: "8px",
                marginBottom: "5px",
                cursor: "move",
              }}
            />
          ))}
        </DropTargetBox>
      ))}
    </div>
  );
};

export default DndContainer;
