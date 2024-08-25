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
import "@fontsource/merriweather"; 
import "@fontsource/merriweather/400.css"; 
import "@fontsource/merriweather/400-italic.css";
import "@fontsource/playfair-display"; 
import "@fontsource/playfair-display/400.css"; 
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/anton"; 
import "@fontsource/anton/400.css";
import "@fontsource/cinzel"; 
import "@fontsource/cinzel/400.css"; 
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
