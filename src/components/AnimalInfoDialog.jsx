import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import makeStyles from "@material-ui/core/styles/makeStyles";

import useStore from "global-hook-store";
import AnimalReserves from "components/AnimalReserves";
import huntingMateStore from "store/huntingMate";
import settingsStore from "store/settings";

const levelDescription = (level) => {
  switch (level) {
    case 1:
      return "Trivial";
    case 2:
      return "";
    case 3:
      return "Very Easy";
    case 4:
      return "";
    case 5:
      return "Medium";
    case 6:
      return "";
    case 7:
      return "";
    case 8:
      return "";
    case 9:
      return "Legendary";
    case 10:
      return "Fabled";
    default:
      return "";
  }
};

export default function AnimalInfoDialog() {
  const classes = useStyles();

  const {
    state: { useKiloWeightUnit },
  } = useStore(huntingMateStore);

  const {
    state: {
      animalInfoModalOpen: dialogOpen,
      animalInfoSelectedAnimal: selectedAnimal,
    },
    actions: { setAnimalInfoModalOpen: setDialogOpen },
  } = useStore(settingsStore);

  const renderWeight = (weight) => {
    const w = useKiloWeightUnit ? weight.kg : weight.lbs;
    if (w) {
      return ` ${w} ${useKiloWeightUnit ? "kg" : "lbs"}`;
    }
    return null;
  };

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
            <DialogContent dividers className={classes.dialogContent}>
              <Typography variant="body1">
                <b>Class:</b> {selectedAnimal.class}
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="body1">
                <b>Max Weight:</b> {renderWeight(selectedAnimal.maxWeight)}
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="body1">
                <b>Max Level:</b>{" "}
                {`${selectedAnimal.maxLevel} - ${levelDescription(
                  selectedAnimal.maxLevel
                )}`}
              </Typography>
              <Divider className={classes.divider} />
              {selectedAnimal.fabled && (
                <>
                  <Typography variant="body1" color="secondary">
                    <b>{`The ${selectedAnimal.name} can appear as a Great One!`}</b>
                  </Typography>
                  <Typography variant="body2">
                    <b>Max Weight:</b>{" "}
                    {renderWeight(selectedAnimal.fabled.maxWeight)}
                  </Typography>
                  <Typography variant="body2">
                    <b>Max Level:</b>{" "}
                    {`${selectedAnimal.fabled.maxLevel} - ${levelDescription(
                      selectedAnimal.fabled.maxLevel
                    )}`}
                  </Typography>
                  <Divider className={classes.divider} />
                </>
              )}

              {selectedAnimal.scents.length > 0 && (
                <>
                  <Typography variant="body1">
                    <b>Scent:</b> {selectedAnimal.scents[0]}
                  </Typography>
                  <Divider className={classes.divider} />
                </>
              )}

              {selectedAnimal.callers.length > 0 && (
                <>
                  <Typography variant="body1">
                    <b>Callers</b>
                  </Typography>
                  {selectedAnimal.callers.map((caller, index) => {
                    return (
                      <Typography key={index} variant="body2">
                        <b>{caller}</b>
                      </Typography>
                    );
                  })}
                  <Divider className={classes.divider} />
                </>
              )}

              <Typography variant="body1">
                <b>Fur types</b>
              </Typography>
              {selectedAnimal.furTypes.map((type, index) => {
                return (
                  <Typography key={index} variant="body2">
                    <b>{type.split(";")[0]}</b>
                    <i>{` (${type.split(";")[1]})`}</i>
                  </Typography>
                );
              })}
              <Divider className={classes.divider} />

              <Typography variant="body1">
                <b>Trophy Scores</b>
              </Typography>
              <Typography variant="body2">
                <b>Silver:</b> {selectedAnimal.trophyScore.silver.toFixed(1)}
              </Typography>
              <Typography variant="body2">
                <b>Gold:</b> {selectedAnimal.trophyScore.gold.toFixed(1)}
              </Typography>
              <Typography variant="body2">
                <b>Diamond:</b> {selectedAnimal.trophyScore.diamond.toFixed(1)}
              </Typography>
              <Typography variant="body2">
                <b>Max Score:</b>{" "}
                {selectedAnimal.trophyScore.maxScore.toFixed(1)}
              </Typography>
              <Divider className={classes.divider} />
              <AnimalReserves animalReserves={selectedAnimal.reserves} />
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

const useStyles = makeStyles(({ spacing }) => ({
  divider: { margin: `${spacing(1)}px 0` },
  dialogContent: {
    paddingBottom: spacing(3),
  },
}));
