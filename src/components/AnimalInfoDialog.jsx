import React from "react";

// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import makeStyles from "@material-ui/core/styles/makeStyles";
import DialogContentText from "@material-ui/core/DialogContentText";

import useStore from "global-hook-store";
import settingsStore from "store/settings";

export default function AnimalInfoDialog() {
  // const classes = useStyles();

  const {
    state: {
      animalInfoModalOpen: dialogOpen,
      animalInfoSelectedAnimal: selectedAnimal,
    },
    actions: { setAnimalInfoModalOpen: setDialogOpen },
  } = useStore(settingsStore);

  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
        fullWidth
        maxWidth="xs"
        aria-labelledby="form-dialog-title"
      >
        {selectedAnimal && (
          <>
            <DialogTitle id="form-dialog-title">
              {selectedAnimal.name}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>{`Class: ${selectedAnimal.class}`}</DialogContentText>
              <DialogContentText>{`Max Weight: ${selectedAnimal.maxWeight.kg} kg`}</DialogContentText>
              <Typography>Reserves:</Typography>
              <ul>
                {selectedAnimal.reserves.map((reserve, index) => {
                  return (
                    <li key={index}>
                      <b>{reserve.name}</b>
                    </li>
                  );
                })}
              </ul>
              <Typography>
                {`Silver: ${selectedAnimal.trophyScore.silver}`}
              </Typography>
              <Typography>
                {`Gold: ${selectedAnimal.trophyScore.gold}`}
              </Typography>
              <Typography>
                {`Diamond: ${selectedAnimal.trophyScore.diamond}`}
              </Typography>
              <Typography>Fur types:</Typography>
              <ul>
                {selectedAnimal.furTypes.map((type, index) => {
                  return (
                    <li key={index}>
                      <b>{type.split(";")[0]}</b>
                      <i>{` (${type.split(";")[1]})`}</i>
                    </li>
                  );
                })}
              </ul>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setDialogOpen(false);
                }}
                color="primary"
                variant="contained"
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}

// const useStyles = makeStyles(() => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// }));
