import { Dashboard } from "./pages/Dashboard";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: pink[300],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
