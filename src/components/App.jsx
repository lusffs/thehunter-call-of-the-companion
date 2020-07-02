import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "components/Header";
import PageRouter from "components/PageRouter";
import Footer from "components/Footer";
import theme from "theme";
import ScrollToTop from "./ScrollToTop";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container direction="column" style={{ minHeight: "100vh" }}>
          <Header />
          <Grid item xs={12} style={{ flexGrow: 1 }}>
            <PageRouter />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Router>
  );
}

export default App;
