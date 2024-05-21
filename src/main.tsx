import React from "react";
import ReactDOM from "react-dom/client";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import ModalProvider from "./hooks/ModalProvider.tsx";
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
      <ModalProvider>
        {/* <ChakraProvider> */}
        <App />
        {/* </ChakraProvider> */}
      </ModalProvider>
    </React.StrictMode>
  );
} else {
  console.log("error");
}
