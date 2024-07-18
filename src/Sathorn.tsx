/* eslint-disable react-refresh/only-export-components */
import React, { ForwardRefRenderFunction } from "react";
import { forwardRef } from "react";

interface SathornPropsType extends React.InputHTMLAttributes<HTMLInputElement> {
  ref: unknown;
  label?: unknown;
}

// eslint-disable-next-line react-refresh/only-export-components
const Sathorn: ForwardRefRenderFunction<HTMLInputElement, SathornPropsType> = (
  props,
  ref
) => {
  return (
    <React.Fragment>
      <input type="text" {...props} ref={ref} />
    </React.Fragment>
  );
};

export default forwardRef(Sathorn);
