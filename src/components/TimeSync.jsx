import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BackspaceIcon from "@material-ui/icons/Backspace";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import makeStyles from "@material-ui/core/styles/makeStyles";

import useStore from "global-hook-store";
import huntingMate from "store/huntingMate";

const useStyles = makeStyles(({ palette, spacing }) => ({
  timeNumber: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  active: {
    color: palette.text.hint,
    textDecoration: "underline",
  },
}));

export default function TimeSync({ onClose }) {
  const classes = useStyles();
  const [timeIndex, setTimeIndex] = useState(0);
  const [time, setTime] = useState("1200");

  const {
    state: { isActive },
    actions: { startHuntingMate },
  } = useStore(huntingMate);

  const handleUserInput = (inputNumber) => {
    setTime((time) => {
      return (
        time.substr(0, timeIndex) +
        inputNumber.toString() +
        time.substr(timeIndex + 1)
      );
    });
    setTimeIndex((value) => value + 1);
  };

  const handleErase = () => {
    if (timeIndex > 0) {
      setTime((time) => {
        return time.substr(0, timeIndex - 1) + "0" + time.substr(timeIndex);
      });
      setTimeIndex((value) => value - 1);
    }
  };
  const handleAccept = () => {
    setTimeIndex(4);
    startHuntingMate(time.substr(0, 2) + ":" + time.substr(2, 2));
    onClose();
  };

  const renderButton = (inputNumber) => {
    let disabled = false;
    switch (timeIndex) {
      case 0:
        disabled = [0, 1, 2].indexOf(inputNumber) === -1;
        break;
      case 1:
        disabled = time[0] === "2" && [0, 1, 2, 3].indexOf(inputNumber) === -1; //If previous value is 2
        break;
      case 2:
        disabled = [0, 1, 2, 3, 4, 5].indexOf(inputNumber) === -1;
        break;
      case 3:
        disabled = false;
        break;
      default:
        disabled = true;
        break;
    }
    return (
      <Grid item xs={4}>
        <Button
          fullWidth
          onClick={() => {
            handleUserInput(inputNumber);
          }}
          size="large"
          disabled={disabled}
          color="default"
          variant="contained"
        >
          {inputNumber}
        </Button>
      </Grid>
    );
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h2" color="textPrimary" align="center">
              <span
                className={
                  timeIndex === 0
                    ? `${classes.timeNumber} ${classes.active}`
                    : classes.timeNumber
                }
                onClick={() => {
                  setTimeIndex(0);
                }}
              >
                {time[0]}
              </span>
              <span
                className={
                  timeIndex === 1
                    ? `${classes.timeNumber} ${classes.active}`
                    : classes.timeNumber
                }
                onClick={() => {
                  setTimeIndex(1);
                }}
              >
                {time[1]}
              </span>
              {":"}
              <span
                className={
                  timeIndex === 2
                    ? `${classes.timeNumber} ${classes.active}`
                    : classes.timeNumber
                }
                onClick={() => {
                  setTimeIndex(2);
                }}
              >
                {time[2]}
              </span>
              <span
                className={
                  timeIndex === 3
                    ? `${classes.timeNumber} ${classes.active}`
                    : classes.timeNumber
                }
                onClick={() => {
                  setTimeIndex(3);
                }}
              >
                {time[3]}
              </span>
            </Typography>
          </Paper>
        </Grid>
        {renderButton(1)}
        {renderButton(2)}
        {renderButton(3)}
        {renderButton(4)}
        {renderButton(5)}
        {renderButton(6)}
        {renderButton(7)}
        {renderButton(8)}
        {renderButton(9)}
        <Grid item xs={4}>
          <IconButton
            fullWidth
            size="large"
            color="secondary"
            onClick={handleErase}
            variant="contained"
            disabled={timeIndex === 0}
          >
            <BackspaceIcon />
          </IconButton>
        </Grid>
        {renderButton(0)}
        <Grid item xs={4}>
          <Button
            fullWidth
            size="large"
            color="primary"
            onClick={handleAccept}
            variant="contained"
          >
            {!isActive ? (
              <>
                <CheckIcon />
              </>
            ) : (
              <>
                <AutorenewIcon />
              </>
            )}
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
