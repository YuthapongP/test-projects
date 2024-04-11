import React from "react";
import ReactDOM from "react-dom/client";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      {/* <ChakraProvider> */}
      <App />
      {/* </ChakraProvider> */}
    </React.StrictMode>
  );
} else {
  console.log("error");
}
