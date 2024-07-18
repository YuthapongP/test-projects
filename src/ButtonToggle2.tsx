import React, { useState } from "react";
import "./buttonToggle.css";

const ButtonToggle2: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <label className={`toggle ${checked ? "checked" : ""}`}>
      <input type="checkbox" checked={checked} />
      <span className="slider" onClick={handleToggle}>
        {checked ? "ON" : "OFF"}
      </span>
    </label>
  );
};

export default ButtonToggle2;
