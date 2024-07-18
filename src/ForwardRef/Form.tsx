import { Button, Input } from "@chakra-ui/react";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Controller, useFormContext, useForm } from "react-hook-form";

const Form = forwardRef((props, ref) => {
  const formRef = useRef(null);
  const [inputValue, setInputValue] = useState();

  //   const methods = useForm({
  //     mode: "all",
  //     reValidateMode: "onChange",
  //   });

  const { formState, register, getValues, handleSubmit } = useForm();

  useImperativeHandle(ref, () => ({
    focus: () => {
      formRef.current.focus();
    },
    getValue: () => {
      return getValues("name");
    },
  }));

  const onSave = (e) => {
    console.log(e);
  };

  const handleSub = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSave)} ref={formRef}>
      {/* <input
        type="text"
        // {...props}
        name="name"
        onChange={handleInputChange}
        value={inputValue}
      /> */}
      <input
        {...register("name")}
        {...props}
        onChange={onchange}
        type="text"
        value
      />
      <button type="submit">Submit</button>
    </form>
  );
});

export default Form;
