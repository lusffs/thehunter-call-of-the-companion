import React from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import makeStyles from "@material-ui/core/styles/makeStyles";

import useStore from "global-hook-store";
import huntingMateStore from "store/huntingMate";

const useStyles = makeStyles(({ spacing }) => ({
  formControl: {
    width: "100%",
    marginBottom: spacing(2),
  },
}));

export default function RightHandSwitch() {
  const classes = useStyles();

  const {
    state: { weightUnit },
    actions: { setWeightUnit },
  } = useStore(huntingMateStore);

  const handleWeightUnitChange = (e) => {
    setWeightUnit(e.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="selected-reserve-label" color="secondary">
        Selected weight unit
      </InputLabel>
      <Select
        labelId="selected-reserve-label"
        id="selected-reserve"
        value={weightUnit}
        onChange={handleWeightUnitChange}
        label="Selected weight unit"
        color="secondary"
      >
        <MenuItem value="kg">Kilo</MenuItem>
        <MenuItem value="lbs">Pounds</MenuItem>
      </Select>
    </FormControl>
  );
}
