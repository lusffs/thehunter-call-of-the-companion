import React from "react";
import { Link as RouterLink } from "react-router-dom";
import backgroundImage from "background2.jpg";
import {
  Typography,
  Button,
  Grid,
  Container,
  Paper,
  Box,
} from "@material-ui/core";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Crosshair from "Icons/Crosshair";

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
          <Typography variant="h4">Call of the Companion App</Typography>
        </Box>
      </Box>
      <Container maxWidth="md">
        <Grid container alignContent="center" alignItems="center">
          <Grid item>
            <Paper>
              <Box my={3} p={3}>
                <Typography variant="h4">Welcome to</Typography>
                <Typography variant="h3">Hunter Companion</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ultrices cursus tellus feugiat pulvinar. Proin sed nunc quis
                  ligula vestibulum dapibus ac sit amet nisl. Suspendisse
                  aliquet nibh vel sollicitudin commodo. Donec pharetra eros
                  lectus, vitae rutrum augue volutpat quis. In ac felis ac dolor
                  elementum aliquet ornare a tellus. Sed et ultricies ligula.
                  Nam aliquet varius est, vel tempor est gravida sollicitudin.
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ultrices cursus tellus feugiat pulvinar. Proin sed nunc quis
                  ligula vestibulum dapibus ac sit amet nisl. Suspendisse
                  aliquet nibh vel sollicitudin commodo. Donec pharetra eros
                  lectus, vitae rutrum augue volutpat quis. In ac felis ac dolor
                  elementum aliquet ornare a tellus. Sed et ultricies ligula.
                  Nam aliquet varius est, vel tempor est gravida sollicitudin.
                </Typography>
                <Grid container>
                  <Grid item>
                    <Button
                      color="primary"
                      variant="contained"
                      component={RouterLink}
                      to="/"
                    >
                      Start
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      color="primary"
                      variant="contained"
                      component={RouterLink}
                      to="/animals"
                    >
                      Animals
                    </Button>
                  </Grid>
                </Grid>
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
