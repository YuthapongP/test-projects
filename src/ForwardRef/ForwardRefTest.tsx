import React, { useRef } from "react";
import Form from "./Form";
import { Button } from "@chakra-ui/react";

export default function ForwardRefTest() {
  const form1Ref = useRef(null);

  function handleRefClick() {
    // console.log("click ref");
    // form1Ref.current.focus();
    const getValues = form1Ref.current.getValues();
    console.log(getValues);
  }

  return (
    <div>
      <Button onClick={handleRefClick}>Click to use ref</Button>
      <Form ref={form1Ref}></Form>
    </div>
  );
}
