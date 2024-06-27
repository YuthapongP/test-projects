import { useState, useCallback } from "react";

type EventOrValue = Event | string | number;

interface UseCheckboxGroupProps {
  defaultValue?: (string | number)[];
  isDisabled?: boolean;
  onChange?: (value: (string | number)[]) => void;
}

type CheckboxProps = Record<string, any> & {
  onChange: (eventOrValue: EventOrValue) => void;
};

function useCheckboxGroup(props: UseCheckboxGroupProps = {}) {
  const { defaultValue = [], isDisabled, onChange } = props;
  const [value, setValue] = useState<(string | number)[]>(defaultValue);

  const handleChange = useCallback(
    (eventOrValue: EventOrValue) => {
      let newValue: (string | number)[];

      if (typeof eventOrValue === "object" && "target" in eventOrValue) {
        const event = eventOrValue as Event;
        const target = event.target as HTMLInputElement;
        newValue = target.checked
          ? [...value, target.value]
          : value.filter((val) => val !== target.value);
      } else {
        const item = eventOrValue as string | number;
        newValue = value.includes(item)
          ? value.filter((val) => val !== item)
          : [...value, item];
      }

      setValue(newValue);
      // if (onChange) onChange(newValue);
    },
    [value, onChange]
  );

  const getCheckboxProps = (props: Record<string, any> = {}) => ({
    ...props,
    onChange: handleChange,
  });

  return {
    value,
    isDisabled,
    onChange: handleChange,
    setValue,
    getCheckboxProps,
  };
}

export default useCheckboxGroup;
