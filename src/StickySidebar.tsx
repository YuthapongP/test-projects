import React, { useEffect, useRef, useState } from "react";
import "./Stickysidebar.css";

export default function StickySidebar() {
  const [stickMenu, setStickMenu] = useState<boolean>(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  //   const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
  //   const scrollPosition = window.scrollY;
  //   console.log(scrollHeight, "scrollHeight");
  //   console.log(clientHeight, "clientHeight");
  //   console.log("scrollTop", scrollTop);
  //   console.log("scrollPosition", scrollPosition);
  const numSticky = ["1", "2", "3", "4", "5", "6", "7"];

  const transparentColor = "rgba(64, 64, 64, 0)";
  const stickMenuGradient = `linear-gradient(
  to top, ${transparentColor},gray 50%,
  ${transparentColor} 
)`;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    console.log(clientHeight);
    console.log(scrollTop, "scrollTop");
    console.log(scrollHeight);
    console.log(scrollPosition);

    const scrollToBottom = scrollHeight - clientHeight - scrollTop <= 100;
    console.log(scrollToBottom);

    if (scrollToBottom) {
      setStickMenu(false);
    } else if (scrollPosition > 100) {
      setStickMenu(true);
    } else {
      setStickMenu(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const randomRGBAColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = 0.7;

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  };

  const styleSmallBoxes = {
    // padding: "100px 10px",
    width: "200px",
    minHeight: "200px",
    backgroundColor: randomRGBAColor(),
    margin: "3px 3px",
  };

  //   const clickMenu = (ref: React.MutableRefObject<Element>) => {
  //     if (ref.current) {
  //       ref.current.scrollIntoView();
  //     }
  //   };
  const clickMenu = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const newListMenu = numSticky.map(() => {
    const CreateUseRef = () => useRef(null);

    return {
      ref: CreateUseRef(),
    };
  });

  const allBoxes = [];

  for (let i = 0; i < numSticky.length; i++) {
    const divBox = (
      <div key={i} ref={newListMenu[i].ref} style={styleSmallBoxes}>
        Box {i + 1}
        <div
          className="flex"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div className="first">A</div>
          <div className="second">B</div>
          <div className="third">C</div>
          <div className="fourth">D</div>
        </div>
      </div>
    );
    allBoxes.push(divBox);
  }

  return (
    <>
      <div
        style={{
          height: "400vh",
          backgroundColor: "pink",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        {allBoxes}
      </div>
      {stickMenu && (
        <div
          style={{
            width: "2vw",
            //   height: "8vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            background: stickMenuGradient,
            transition: "all 0.15s ease 2s",
            gap: "2px",
          }}
        >
          {numSticky.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: "10px 10px",
                margin: "2px 2px",
                cursor: "pointer",
                transition: "color 0.3s ease",
                // color: "black",
                color: idx === hoveredIdx ? "white" : "black",
              }}
              onClick={() => clickMenu(newListMenu[idx].ref)}
              //   onMouseEnter={(e) => {
              //     e.target.style.color = "white";
              //   }}
              //   onMouseLeave={(e) => {
              //     e.target.style.color = "black";
              //   }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}

              //   ref={newListMenu[idx].ref}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
