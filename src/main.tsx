import React from "react";
import ReactDOM from "react-dom/client";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ModalProvider from "./hooks/ModalProvider";
import { Provider } from "react-redux";
import { store } from "./Redux2/useStore";
import "./index.css";
import theme from "./Tabs/chakraTabsStyles/theme";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    // <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <DndProvider backend={HTML5Backend}>
          <ModalProvider>
            {/* <ChakraProvider> */}
            <App />
            {/* </ChakraProvider> */}
          </ModalProvider>
        </DndProvider>
      </ChakraProvider>
    </Provider>
    // </React.StrictMode>
  );
} else {
  console.log("error");
}
