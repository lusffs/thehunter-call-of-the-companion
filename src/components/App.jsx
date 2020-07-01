import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "components/Header";
import PageRouter from "components/PageRouter";
import Footer from "components/Footer";
import theme from "theme";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <PageRouter />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
