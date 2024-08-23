import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/nunito-sans"; 
import "@fontsource/nunito-sans/400.css"; 
import "@fontsource/nunito-sans/400-italic.css";
import "@fontsource/nunito"; 
import "@fontsource/nunito/400.css"; 
import "@fontsource/nunito/400-italic.css";
import "@fontsource/merriweather"; // Defaults to weight 400
import "@fontsource/merriweather/400.css"; // Specify weight
import "@fontsource/merriweather/400-italic.css";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
