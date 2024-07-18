import React from "react";
import { useFormContext } from "react-hook-form";

export type TestFormWatchValueChildrenType = {
  name: string;
  index: number;
  disabled: boolean;
  onBlur: unknown;
};

const TestFormWatchValueChildren: React.FC<TestFormWatchValueChildrenType> = ({
  name,
  index,
  disabled,
  onBlur,
}) => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        type="text"
        {...register(name)}
        disabled={disabled}
        onBlur={() => onBlur}
      />
    </div>
  );
};

export default TestFormWatchValueChildren;
