import { useContext } from "react";
import { ModalContext } from "./ModalProvider";

export default function TestContext() {
  const context = useContext(ModalContext);
  return (
    <div>
      {context.isOpen ? (
        <div
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "grey",
            position: "relative",
          }}
        >
          <div
            onClick={() => context.close()}
            style={{
              width: "20px",
              height: "20px",
              zIndex: "999",
              borderRadius: "50%",
              backgroundColor: "pink",
              position: "absolute",
              top: 0,
              right: 0,
              cursor: "pointer",
            }}
          ></div>
          <button onClick={() => context.setNumState()}>
            Click to increase number
          </button>
        </div>
      ) : null}
      <button onClick={() => context.close()}>Click to close modal</button>
      <button onClick={() => context.open()}>Click to open modal</button>
    </div>
  );
}
