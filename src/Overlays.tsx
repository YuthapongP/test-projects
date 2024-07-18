import React, { useState } from "react";
import ReactDOM from "react-dom";

const overlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
};

const modalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "70px",
  backgroundColor: "white",
  zIndex: 1000,
};

const portalElement = document.getElementById("portal") as Element;

export default function Overlays({ open, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={overlayStyles}></div>
      <div style={modalStyles}>
        <button onClick={onClose}>Close Your Modal</button>
        {/* {children} */}
      </div>
    </>,
    portalElement
  );
}
