import React from "react";
import useCheckboxGroup from "./useCheckbox";

const CheckboxGroupComponent = () => {
  const { value, isDisabled, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ["option1"],
    onChange: (newValue) => console.log("Selected values:", newValue),
  });

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="option1"
          {...getCheckboxProps({ disabled: isDisabled })}
        />
        Option 1
      </label>
      <label>
        <input
          type="checkbox"
          value="option2"
          {...getCheckboxProps({ disabled: isDisabled })}
        />
        Option 2
      </label>
      <label>
        <input
          type="checkbox"
          value="option3"
          {...getCheckboxProps({ disabled: isDisabled })}
        />
        Option 3
      </label>
      <div>Selected values: {value.join(", ")}</div>
    </div>
  );
};

export default CheckboxGroupComponent;
