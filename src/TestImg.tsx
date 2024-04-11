import React from "react";
import testLogo from "/Users/mbs/personal-projects/test12/public/hello.jpg";

const imgBox = {
  width: "200px",
  height: "500px",
  display: "relative",
  overflow: "hidden",
  backgroundColor: "pink",
};

// const imgStyle = {
//   //   width: "100%",
//   //   height: "100%",
//   objectFit: "cover",
// };

const imgWrapper = {
  width: "250px",
  height: "200px",
  objectFit: "cover",
  objectPosition: "20% 20%",
};

export default function TestImg() {
  return <img src={testLogo} style={imgWrapper} alt="" />;
}
