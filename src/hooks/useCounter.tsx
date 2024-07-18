import React from "react";
import { useCounter } from "@uidotdev/usehooks";

export default function UseCounters() {
  const [count, { increment, decrement, set, reset }] = useCounter(5, {
    min: 1,
    max: 20,
  });
  return (
    <div>
      <h1>UseCounter</h1>
      <h6>with optional min / max</h6>
      <button disabled={count >= 10} className="link" onClick={increment}>
        Increment
      </button>
      <button disabled={count <= 5} className="link" onClick={decrement}>
        Decrement
      </button>
      <button className="link" onClick={() => set(6)}>
        Set to 6
      </button>
      <button className="link" onClick={reset}>
        Reset
      </button>
      <p>{count}</p>
    </div>
  );
}
