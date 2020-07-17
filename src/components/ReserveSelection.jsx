import React from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import makeStyles from "@material-ui/core/styles/makeStyles";

import useStore from "global-hook-store";
import huntingMateStore from "store/huntingMate";

import reserves from "_data/reserves";

export default function ReserveSelection() {
  const classes = useStyles();

  const {
    state: { selectedReserve },
    actions: { setSelectedReserve },
  } = useStore(huntingMateStore);

  const handleReserveChange = (event) => {
    setSelectedReserve(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="selected-reserve-label" color="secondary">
        Selected Reserve
      </InputLabel>
      <Select
        labelId="selected-reserve-label"
        id="selected-reserve"
        value={selectedReserve}
        onChange={handleReserveChange}
        label="Selected Reserve"
        displayEmpty
        color="secondary"
      >
        <MenuItem value="all">
          <em>All reserves</em>
        </MenuItem>
        {reserves.map((reserve, index) => {
          return (
            <MenuItem key={index} value={reserve}>
              {reserve}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

const useStyles = makeStyles(({ spacing }) => ({
  formControl: {
    margin: spacing(1),
    minWidth: 120,
  },
}));
