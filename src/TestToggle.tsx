import React, { useRef, useState } from "react";
import "./TestToggle.css";

export default function TestToggle() {
  const [data, setData] = useState<boolean>(false);
  const toglgeRef = useRef<HTMLDivElement>(null);

  function handleToggle() {
    setData(!data);
    if (toglgeRef.current) {
      toglgeRef.current.classList.toggle("open");
    }
  }
  return (
    <>
      <button onClick={handleToggle}>click</button>
      {/* {data && (
        <div ref={toglgeRef} className="nicky">
          data
        </div>
      )} */}
      <div className="nicky" ref={toglgeRef}>
        <div className="expandable">data</div>
      </div>
    </>
  );
}
