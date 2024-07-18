import React, { Fragment, useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import { Button, Skeleton } from "@chakra-ui/react";
import { format, addDays } from "date-fns";
import "./daypicker.css";
import { ChakraProvider } from "@chakra-ui/react";
import "react-day-picker/dist/style.css";

const pastMonth = new Date(2024, 4, 3);

export default function DayPickerRange() {
  const initialRange: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 5),
  };
  const [range, setRange] = useState<DateRange | undefined>(initialRange);
  const [loading, setIsLoading] = useState<boolean>(false);

  console.log(range);

  let footer = <div>please selected your date</div>;

  if (range?.from) {
    if (!range?.to) {
      footer = <div>{format(range.from, "PPP")}</div>;
    } else if (range.to) {
      footer = (
        <div>
          {format(range.from, "PPP")} - {format(range.to, "PPP")}
        </div>
      );
    }
  }

  function getDaysInRange(start, end) {
    const days = [];
    let currentDate = new Date(start);

    while (currentDate <= end) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  }

  console.log(getDaysInRange(range?.from, range?.to));

  const timer = setTimeout(() => {
    setIsLoading(true);
  }, 3000);

  const css = `
  :root {
    --rdp-hover-background-color: red;
  }
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: none;
    background-color: rgba(209, 182, 200,.4);
  }
  .my-selected:hover:not([disabled]) { 
    color: black;

  }
  
  .my-today { 
    font-weight: bold;
    font-size: 120%; 
    color: hotpink;
  }

`;

  return (
    <ChakraProvider>
      <Fragment>
        <style>{css}</style>
        <DayPicker
          mode="range"
          modifiersClassNames={{
            selected: "my-selected",
            today: "my-today",
          }}
          modifiersStyles={{
            disabled: { fontSize: "75%" },
          }}
          selected={range}
          onSelect={setRange}
          defaultMonth={pastMonth}
          footer={footer}
        />

        <div className="selected-container">
          {getDaysInRange(range?.from, range?.to).map((k) => (
            <Skeleton
              fadeDuration={4}
              isLoaded={loading}
              className="dateString"
            >
              {String(format(k, "PPP"))}
            </Skeleton>
          ))}
        </div>

        <Button
          isLoading={loading}
          loadingText="Loading..."
          size="md"
          spinnerPlacement="end"
          colorScheme="green"
          onClick={() => setRange(null)}
        >
          Click to reset
        </Button>
      </Fragment>
    </ChakraProvider>
  );
}
