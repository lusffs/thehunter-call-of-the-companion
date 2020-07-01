import React from "react";
import { Link as RouterLink } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Typography,
  Button,
  Grid,
  Container,
  Paper,
  Box,
} from "@material-ui/core";

import backgroundImage from "assets/images/background2.jpg";
import Crosshair from "components/icons/Crosshair";

export default function Start() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.hero}>
        <Crosshair style={{ width: "auto", height: "10vh" }} />
        <Box mx={3}>
          <Typography color="primary" variant="h3">
            theHunter
          </Typography>
          <Typography variant="h4">Call of the Companion</Typography>
        </Box>
      </Box>
      <Container maxWidth="md">
        <Grid container alignContent="center" alignItems="center">
          <Grid item>
            <Paper>
              <Box my={3} p={3}>
                <Typography variant="h4">Hello there Hunter</Typography>
                <Typography variant="body1" paragraph>
                  The App is currently under development.
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  component={RouterLink}
                  to="/animals"
                >
                  Animals
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

const useStyles = makeStyles(() => ({
  hero: {
    backgroundSize: "cover",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "100vh",
    boxShadow: `inset 0 -10px 10px -10px #000000`,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));
