import { useDrop } from "react-dnd";

const ParentBox = ({ children, name, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "box", // Define which type of item can be dropped here
    drop: (item) => onDrop(item), // Handle drop event
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        border: "1px dashed black",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <strong>{name}</strong>
      {isOver && <div style={{ color: "green" }}>Can drop here</div>}
      <div>{children}</div>
    </div>
  );
};

export default ParentBox;
