import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import useStore from "global-hook-store";
import settingsStore from "store/settingsStore";

export default function RightHandSwitch() {
  const {
    state: { isRightHanded },
    actions: { toggleRightHanded },
  } = useStore(settingsStore);

  const toggleChecked = () => {
    toggleRightHanded();
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={isRightHanded}
            onChange={toggleChecked}
            color="secondary"
          />
        }
        label="Right hand mode"
      />
    </FormGroup>
  );
}
