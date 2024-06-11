// import React, { useEffect, useState } from "react";

// export default function MovingObject() {
//   const [isMoving, setIsMoving] = useState(true);
//   const [movingTranslate, setMovingTranslate] = useState(30);

//   const handleStop = () => {
//     setIsMoving((prev) => !prev);
//   };

//   useEffect(() => {
//     let movingInterval: string | number | NodeJS.Timeout | undefined;
//     if (isMoving) {
//       movingInterval = setInterval(() => {
//         setMovingTranslate((prev) => prev + 1);
//       }, 1000);
//     }

//     return () => clearInterval(movingInterval);
//   }, [isMoving]);

//   return (
//     <div className="moving-object-container">
//       <div
//         className="moving-object"
//         style={{
//           width: "50px",
//           height: "50px",
//           backgroundColor: "pink",
//           transform: `translateX(${movingTranslate}px)`,
//         }}
//       />
//       <button onClick={handleStop}> click it </button>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";

const MovingObject = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [movingTranslate, setIsMovingTranslate] = useState(0);
  const movingRef = useRef(null);

  const handleStop = () => {
    setIsMoving((prev) => !prev);
  };

  const handleMoving = (time) => {
    setIsMovingTranslate((prev) => prev + 1);
    movingRef.current = requestAnimationFrame(handleMoving);
  };

  useEffect(() => {
    if (isMoving) {
      movingRef.current = requestAnimationFrame(handleMoving);
    } else if (movingRef.current) {
      cancelAnimationFrame(movingRef.current);
    }
  }, [isMoving]);

  return (
    <div
      className="moving-object"
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: "pink",
        transform: `translateX(${movingTranslate}px)`,
      }}
      tabIndex={-1}
      aria-hidden
      //   onClick={handleStop}
      onClick={(e) => {
        e.preventDefault();
        handleStop();
      }}
    ></div>
  );
};

export default MovingObject;
