import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Box,
  Grid,
  Button,
  Dialog,
  Toolbar,
  Container,
  Typography,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Hidden,
} from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import animals from "_data/animals";
import backgroundImage from "assets/images/background.jpg";

const firstLetters = animals.reduce((accumulator, animal) => {
  for (const n of animal.name.split(" ")) {
    const l = n.charAt(0).toUpperCase();
    if (accumulator.indexOf(l) === -1) {
      accumulator.push(l);
    }
  }
  return accumulator;
}, []);

export default function AnimalFinder() {
  const classes = useStyles();
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Toolbar />
      <Box className={classes.hero} mb={3}>
        <Box mx={3}>
          <Typography color="primary" variant="h3">
            Animal finder
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="md">
        {!selectedCharacter && (
          <Grid container alignContent="center" alignItems="center" spacing={3}>
            {firstLetters.sort().map((letter, index) => {
              return (
                <Grid key={index} item xs={4} sm={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => {
                      setSelectedCharacter(letter);
                    }}
                  >
                    {letter}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        )}
        {selectedCharacter && (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3} md={2}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={() => {
                    setSelectedCharacter("");
                  }}
                >
                  <KeyboardBackspaceIcon className={classes.backIcon} />
                  {"A-Z"}
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={9} md={10}>
              <Grid
                container
                alignContent="center"
                alignItems="stretch"
                spacing={3}
              >
                {animals
                  .filter((animal) => {
                    for (const n of animal.name.split(" ")) {
                      if (n.charAt(0) === selectedCharacter) {
                        return true;
                      }
                    }
                    return false;
                  })
                  .map((animal, index) => {
                    return (
                      <Grid key={index} item xs={6} sm={4}>
                        <Button
                          className={classes.animalButton}
                          variant="contained"
                          fullWidth
                          onClick={() => {
                            setSelectedAnimal(animal);
                            setDialogOpen(true);
                          }}
                        >
                          {animal.name.charAt(0) === selectedCharacter
                            ? animal.name
                            : `${animal.name.split(" ")[1]}, ${
                                animal.name.split(" ")[0]
                              }`}
                        </Button>
                      </Grid>
                    );
                  })}
                <Hidden smUp>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth
                      onClick={() => {
                        setSelectedCharacter("");
                      }}
                    >
                      <KeyboardBackspaceIcon className={classes.backIcon} />
                      {"A-Z"}
                    </Button>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
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
              <p id="transition-modal-description">
                {selectedAnimal.diamondRequirement.trophyRating}
              </p>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  setDialogOpen(false);
                  setSelectedCharacter("");
                }}
              >
                <KeyboardBackspaceIcon className={classes.backIcon} />
                {"A-Z"}
              </Button>
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

const useStyles = makeStyles(() => ({
  hero: {
    backgroundSize: "cover",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "35vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  animalButton: { height: "100%" },
}));
