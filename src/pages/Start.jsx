import React, { useState, useEffect } from "react";

import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import makeStyles from "@material-ui/core/styles/makeStyles";

import backgroundImage from "assets/images/background2.jpg";
import CrosshairIcon from "components/icons/Crosshair";
import TextField from "@material-ui/core/TextField";

const SERVER_SECOND_VALUE = 3600 / 920; // 1h in game = 15:20 minutes realtime => 3.913 seconds per 1 real life second

export default function Start() {
  const classes = useStyles();
  const [inGameTime, setInGameTime] = useState("07:00");
  const [clientSyncTime, setClientSyncTime] = useState();
  const [worldTime, setWorldTime] = useState();
  const [serverClock, setServerClock] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        const msSinceStart = new Date().getTime() - clientSyncTime;

        const serverTime = new Date(worldTime);
        serverTime.setMilliseconds(
          serverTime.getMilliseconds() + msSinceStart * SERVER_SECOND_VALUE
        );

        setServerClock(
          `${
            serverTime.getHours() < 10
              ? `0${serverTime.getHours()}`
              : serverTime.getHours()
          }:${
            serverTime.getMinutes() < 10
              ? `0${serverTime.getMinutes()}`
              : serverTime.getMinutes()
          }`
        );
      }, 250);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const handleTimerClick = () => {
    setWorldTime(
      new Date().setHours(
        parseInt(inGameTime.split(":")[0]),
        parseInt(inGameTime.split(":")[1]),
        0,
        0
      )
    );
    setClientSyncTime(new Date().getTime());
    setIsActive(!isActive);
  };

  const handleTimerChange = (e) => {
    setInGameTime(e.target.value);
  };

  return (
    <>
      <Box className={classes.hero}>
        <CrosshairIcon style={{ width: "auto", height: "10vh" }} />
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
          <Grid item>
            <Paper>
              <Box my={3} p={3}>
                <form className={classes.container} noValidate>
                  <TextField
                    id="time"
                    label="In game time"
                    type="text"
                    defaultValue={inGameTime}
                    className={classes.textField}
                    onChange={handleTimerChange}
                    disabled={isActive}
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleTimerClick}
                  >
                    {isActive ? "Stop time sync" : "Start time sync"}
                  </Button>
                  {serverClock && <h1>{serverClock}</h1>}
                </form>
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
/**
 * 
 * function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
 */
