import React, { useEffect, useState } from "react";
import "./ProgressBar.css";
import styled, { css } from "styled-components";

// export const ProgressStyles = styled.div({width}) => css`
//     .progress-bar2 {
//         width: ${(width) => width };
//     }
// `

interface ProgressStylesProps {
  progresss?: number;
}

const ProgressStyles = styled.div<ProgressStylesProps>`
  ${({ progresss }) => css`
    position: fixed;
    width: 100vw;
    /* background-color: transparent; */
    .progress-bar2 {
      position: absolute;
      background-color: pink;
      /* min-width: 50px; */
      max-width: 95%;
      height: 2px;
      top: 0;
      left: 0;
      background: linear-gradient(
        to right,
        red ${progresss}%,
        rgba(128, 128, 128, 0.5) ${progresss}%
      );
      transition: width 0.3s all;
      width: 100%;
      /* width: ${progresss}vw; */
      /* transition: width 0.3s; */
    }
    .progress-bar2 {
      height: 1px;
      width: 30px;
      background-color: pink;
  }
    .progress-percentage {
      background-color: white;
      text-align: center;
      position: absolute;
      top: 0;
      right: 2%;
      box-shadow: 0px 0px 10px 3px rgba(128, 128, 128, 0.5);
      width: 30px;
      height: 20px;
    }
  `}
`;
// const ProgressStyles = styled.div<ProgressStylesProps>`
//   ${({ width }) => css`
//     position: relative;
//     width: 100vw;
//     .progress-bar2 {
//       position: sticky;
//       background-color: pink;
//       width: 50px;
//       height: 2px;
//       top: 0;
//       padding-right: calc(${width}) vw;
//     }
//   `}
// `;

const ProgressBar2 = () => {
  const [percentage, setPercentage] = useState(0);
  console.log(percentage);
  //   const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
  //   const scrollToBottom = scrollHeight - clientHeight - scrollTop <= 100;
  const new_percentage = Math.floor(percentage);

  const handleScroll = () => {
    // const scrollPosition = window.scrollY;

    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    const scrollToBottom = scrollHeight - clientHeight - scrollTop <= 100;

    console.log("clientHeight", clientHeight);
    console.log("scrollTop", scrollTop);
    console.log("scrollHeight", scrollHeight);
    console.log("scrollToBottom", scrollToBottom);

    // const scrollPercentage = scrollTop * (100 / scrollTop);
    // setPercentage(scrollPercentage);

    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setPercentage(scrollPercentage);

    // const scrollPercentage =
    //   ((scrollHeight - clientHeight - scrollTop) / scrollHeight) * 120;
    // setPercentage(scrollPercentage);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ProgressStyles progresss={percentage}>
        <div className="progress-bar2"></div>
        <div className="progress-percentage">{new_percentage}</div>
      </ProgressStyles>
    </>
  );
};

export default ProgressBar2;
