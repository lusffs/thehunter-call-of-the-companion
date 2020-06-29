import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import Header from "Header";
// import BottomNavigation from "BottomNavigation";
import PageRouter from "PageRouter";
import theme from "theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <PageRouter />
        {/* <BottomNavigation /> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;