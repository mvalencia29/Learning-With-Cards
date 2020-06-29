import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import "./index.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4285f4",
    },
    secondary: {
      main: "#FFA000",
    },
  },
});

//#00796b

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
