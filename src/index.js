import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

//GLOBAL STYLES BEGIN
const theme = {
    blackColor: "#262626",
    pinkColor:  "#FF10F0", 
    whiteColor: "#ffffff",
}

//GLOBAL STYLES END
ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    ,
    document.querySelector('#root')
  )
