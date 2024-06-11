// import React, { useRef, useState } from "react";

// export default function Draggable() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const [dragging, setIsDragging] = useState<boolean>(false);
//   const boxRef = useRef<HTMLDivElement | null>(null);

//   const handleMouseMove = (event) => {
//     if (dragging) {
//       const newX = event.clientX - pos.x;
//       const newY = event.clientY - pos.y;
//       setPos({ x: newX, y: newY });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleMouseDown = (event) => {
//     setIsDragging(true);
//     const offsetX = event.clientX - boxRef.current?.offsetLeft;
//     const offsetY = event.clientY - boxRef.current?.offsetTop;

//     setPos({ x: offsetX, y: offsetY });
//   };

//   return (
//     <>
//       <div
//         ref={boxRef}
//         onMouseDown={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         onMouseMove={handleMouseDown}
//         style={{
//           position: "absolute",
//           left: pos.x,
//           top: pos.y,
//           cursor: "grab",
//           width: "50px",
//           height: "40px",
//           backgroundColor: "pink",
//         }}
//       >
//         Heeyyy
//       </div>
//     </>
//   );
// }

// import React, { useRef, useState } from "react";

// export default function Draggable() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const [dragging, setIsDragging] = useState<boolean>(false);
//   const initialPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
//   const boxRef = useRef<HTMLDivElement | null>(null);

//   const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
//     if (dragging && boxRef.current) {
//       const newX = event.clientX - initialPos.current.x;
//       const newY = event.clientY - initialPos.current.y;
//       setPos({ x: newX, y: newY });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
//     if (boxRef.current) {
//       setIsDragging(true);
//       initialPos.current = {
//         x: event.clientX - pos.x,
//         y: event.clientY - pos.y,
//       };
//     }
//   };

//   return (
//     <div
//       ref={boxRef}
//       onMouseDownCapture={handleMouseDown}
//       onMouseUpCapture={handleMouseUp}
//       onMouseMoveCapture={handleMouseMove}
//       style={{
//         position: "absolute",
//         left: pos.x,
//         top: pos.y,
//         cursor: dragging ? "grabbing" : "grab",
//         width: "50px",
//         height: "40px",
//         backgroundColor: "hotpink",
//       }}
//     >
//       Heeyyy
//     </div>
//   );
// }

import React, { useRef, useState, useEffect } from "react";
import "./Draggable.css";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { Calendar, mergeStyles } from "@fluentui/react-calendar-compat";
import { addDays, type CalendarProps } from "@fluentui/react-calendar-compat";
import { Calendar, mergeStyles } from "@fluentui/react";
import GoogleLoginButton from "./GoogleLoginButton";
import GitHubLoginButton from "./GitHubLoginButton";

export default function Draggable(props: CalendarProps) {
  const [pos, setPos] = useState({ x: 30, y: 400 });
  const [dragging, setIsDragging] = useState<boolean>(false);
  const [mouseMoved, setMouseMoved] = useState(false);
  const initialPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [selectedDate, setSelectedDate] = React.useState<Date>();

  const onSelectDate = React.useCallback((date: Date): void => {
    setSelectedDate(date);
  }, []);

  //   const useStyles = makeStyles({
  //     wrapper: { height: "360px" },
  //     dropdown: { width: "230px" },
  //   });

  //   const styles = useStyles;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseMoved(true);
      if (dragging && boxRef.current) {
        const newX = event.clientX - initialPos.current.x;
        const newY = event.clientY - initialPos.current.y;
        setPos({ x: newX, y: newY });

        // console.log("event.clientX", event.clientX);
        // console.log("event.clientY", event.clientY);

        // console.log("initialPos.current.x", initialPos.current.x);
        // console.log("initialPos.current.y", initialPos.current.y);

        // console.log("newX", newX);
        // console.log("newY", newY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (boxRef.current) {
      setIsDragging(true);
      setMouseMoved(false);
      initialPos.current = {
        x: event.clientX - pos.x,
        y: event.clientY - pos.y,
      };
    }
    console.log("clientX", event.clientX);
    console.log("clientY", event.clientY);
  };

  console.log("initX", initialPos.current.x);
  console.log("initY", initialPos.current.y);

  //   const customStyles = {
  //     fontFamily: "Arial, sans-serif",
  //     border: "1px solid #ccc",
  //     borderRadius: "8px",
  //     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  //   };

  // const customStyles = {
  //   selectedDate: {
  //     backgroundColor: "#0078d4",
  //     color: "white",
  //     selectors: {
  //       ":hover": {
  //         backgroundColor: "#005a9e",
  //       },
  //     },
  //   },
  // };

  function handleCalendarOpacity() {
    if (!mouseMoved) {
      setIsVisible(!isVisible);
    }
  }

  // const customStyles = mergeStyles({
  //   selectors: {
  //     ".ms-Calendar-dayIsToday": {
  //       backgroundColor: "#FEDC7D", // Example: Background color for today's date
  //     },
  //     ".ms-Calendar-daySelection": {
  //       backgroundColor: "#0078d4", // Example: Background color for the selected date
  //       color: "white", // Example: Text color for the selected date
  //     },
  //   },
  // });

  return (
    <div
      ref={boxRef}
      className="draggable-box"
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y,
        cursor: dragging ? "grabbing" : "grab",
        width: "50px",
        height: "40px",
      }}
    >
      <EmailIcon boxSize={20} onClick={handleCalendarOpacity}></EmailIcon>
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          display: isVisible ? "block" : "none",
          transition: "opacity 4s ease-in-out",
        }}
      >
        <div
          className="social-login"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            // paddingRight: "4rem",
            paddingTop: "2rem",
            // minWidth: "300px",
            alignItems: "center",
          }}
        >
          <GoogleLoginButton />
          <GitHubLoginButton />
        </div>
        {/* <Calendar
          // {...props}
          // className={customStyles}
          showMonthPickerAsOverlay
          allFocusable
          highlightSelectedMonth
          //   showCloseButton
          showGoToToday={true}
          onSelectDate={onSelectDate}
          value={selectedDate}
          // theme={{
          //   schemes: {
          //     soft: {
          //       effects: {
          //         elevation4: "blue",
          //         roundedCorner6: "pink",
          //         elevation8: "red",
          //         elevation16: "white",
          //         elevation64: "blue",
          //         roundedCorner4: "blue",
          //         roundedCorner2: "black",
          //       },
          //     },
          //     palette: ;
          //     fonts: IFontStyles;
          //     semanticColors: ISemanticColors;
          //     isInverted: boolean;
          //     disableGlobalClassNames: boolean;

          //   },
          // }}

          // styles={customStyles}
          //   calendarDayProps={{ daysToSelectInDayView: 2 }}
          // styles={{
          //   selectedDate: {
          //     backgroundColor: "#0078d4", // Adjust the background color for the selected date
          //     color: "white", // Adjust the text color for the selected date
          //     selectors: {
          //       ":hover": {
          //         backgroundColor: "#005a9e", // Adjust the background color on hover
          //       },
          //     },
          //   },
          // }}
        ></Calendar> */}
      </div>
    </div>
  );
}
