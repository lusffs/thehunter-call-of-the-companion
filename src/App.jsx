import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";
import Header from "Header";
import BottomNavigation from "BottomNavigation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Typography variant="h3">
        theHunter - Call of the Companion App
      </Typography>
      <Typography>
        Edit <code>src/App.js</code> and save to reload.
      </Typography>
      <Button color="primary" size="medium" variant="text">
        Learn React
      </Button>
      <Button color="primary" size="medium" variant="outlined">
        Learn React
      </Button>
      <Button color="primary" size="medium" variant="contained">
        Learn React
      </Button>
      {/* <Button color="secondary" size="medium" variant="text">
          Learn React
        </Button>
        <Button color="secondary" size="medium" variant="outlined">
          Learn React
        </Button>
        <Button color="secondary" size="medium" variant="contained">
          Learn React
        </Button> */}
      <BottomNavigation />
    </ThemeProvider>
  );
}

export default App;
