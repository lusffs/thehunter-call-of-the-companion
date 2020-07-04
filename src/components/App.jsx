import React from "react";

import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

import theme from "theme";
import Footer from "components/Footer";
import Header from "components/Header";
import PageRouter from "pages/_router";
import ScrollToTop from "components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container direction="column" style={{ minHeight: "100vh" }}>
          <Header />
          <PageRouter />
          <Footer />
        </Grid>
      </ThemeProvider>
    </Router>
  );
}

export default App;
