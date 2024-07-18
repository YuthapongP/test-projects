import React, { Fragment, useState } from "react";
import { DayPicker } from "react-day-picker";
import { Button } from "@chakra-ui/react";
import { format } from "date-fns";

import { ChakraProvider } from "@chakra-ui/react";
import "react-day-picker/dist/style.css";

export default function DayPickerMultiple() {
  const initialValue: Date[] = [];
  const [date, setDate] = useState<Date[] | undefined>(initialValue);

  let footer =
    date && date.length > 0 ? (
      <div>You have selected {date.length}</div>
    ) : (
      <div>Please select at least one day </div>
    );

  return (
    <ChakraProvider>
      <Fragment>
        <DayPicker
          mode="multiple"
          min={1}
          selected={date}
          onSelect={setDate}
          footer={footer}
        />
        <Button colorScheme="blue" size="xs" onClick={() => setDate()}>
          Click to reset your selected date
        </Button>
      </Fragment>
    </ChakraProvider>
  );
}
