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
import HuntingMateDriver from "./HuntingMateDriver";
import TimeSyncModal from "./TimeSyncModal";
import AnimalInfoDialog from "./AnimalInfoDialog";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <HuntingMateDriver />
        <TimeSyncModal />
        <CssBaseline />
        <Grid container direction="column" style={{ minHeight: "100vh" }}>
          <Header />
          <PageRouter />
          <Footer />
        </Grid>
        <AnimalInfoDialog />
      </ThemeProvider>
    </Router>
  );
}

export default App;
