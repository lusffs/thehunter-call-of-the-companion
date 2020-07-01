import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import Header from "components/Header";
import Menu from "components/Menu";
import PageRouter from "components/PageRouter";
import Footer from "components/Footer";
import theme from "theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <PageRouter />
        {/* <BottomNavigation /> */}
        <Footer />
        <Menu />
      </ThemeProvider>
    </Router>
  );
}

export default App;
