import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import useStore from "global-hook-store";
import settingsStore from "store/settings";

export default function RightHandSwitch() {
  const {
    state: { useKiloWeightUnit },
    actions: { toggleWeightUnit },
  } = useStore(settingsStore);

  const toggleChecked = () => {
    toggleWeightUnit();
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={useKiloWeightUnit}
            onChange={toggleChecked}
            color="secondary"
          />
        }
        label="Use kg"
      />
    </FormGroup>
  );
}
