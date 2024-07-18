import React from "react";
import { motion } from "framer-motion";
import "./ButtonFramerMotion.css";
// import { LuckyAlphabet } from "nicky-package5";
import { LuckyAlphabet } from "nicky-package6";

export default function ButtonFramerMotion() {
  const testLuckyAlPhabet = LuckyAlphabet("SoSleepy!");

  console.log(testLuckyAlPhabet);

  return (
    <>
      <div>{testLuckyAlPhabet}</div>
      <div>{testLuckyAlPhabet}</div>
      <div>{testLuckyAlPhabet}</div>
      <div>{testLuckyAlPhabet}</div>
      <div>{testLuckyAlPhabet}</div>
      <div>{testLuckyAlPhabet}</div>
      <div>{testLuckyAlPhabet}</div>
      <div>{testLuckyAlPhabet}</div>
    </>
  );
}
