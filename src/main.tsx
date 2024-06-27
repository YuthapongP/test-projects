import React from "react";
import ReactDOM from "react-dom/client";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import ModalProvider from "./hooks/ModalProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./Redux2/useStore.ts";
import "./index.css";
import theme from "./Tabs/chakraTabsStyles/theme.ts";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <ModalProvider>
            {/* <ChakraProvider> */}
            <App />
            {/* </ChakraProvider> */}
          </ModalProvider>
        </ChakraProvider>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.log("error");
}
