import React, { useState } from "react";
import { DayPicker as DayPickers } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

export default function DayPicker() {
  const [date, setDate] = useState<Date>();

  let footer = <div>You have selected</div>;

  if (date) {
    footer = <div>{format(date, "PP")}.</div>;
  }

  return (
    <DayPickers
      mode="single"
      selected={date}
      numberOfMonths={3}
      onSelect={setDate}
      footer={footer}
    />
  );
}
