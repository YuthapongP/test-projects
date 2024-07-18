import React from "react";

const DemoComponent: React.FC = ({ content }) => {
  return (
    <div>
      <h2>This is a Demo Component</h2>
      <p>{content}</p>
    </div>
  );
};

export default DemoComponent;
