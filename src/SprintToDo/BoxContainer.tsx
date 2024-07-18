// App.js or BoxContainer.js
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ParentBox from "./ParentBox";
import ChildBox from "./ChildBox";

const SprintToDo = () => {
  const handleDrop = (item) => {
    console.log(`Dropped: ${item.name}`);
    // Implement logic to handle the dropped item as needed
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <ParentBox name="Box 1" onDrop={handleDrop}>
          <ChildBox name="Child 1" />
          <ChildBox name="Child 2" />
        </ParentBox>
        <ParentBox name="Box 2" onDrop={handleDrop}>
          {/* You can drop items here */}
        </ParentBox>
      </div>
    </DndProvider>
  );
};

export default SprintToDo;
