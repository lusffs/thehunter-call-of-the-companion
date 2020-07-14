import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Dialog from "@material-ui/core/Dialog";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DialogContentText from "@material-ui/core/DialogContentText";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import backgroundImage from "assets/images/background2.jpg";

import animals from "_data/animals";

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
              <DialogContentText>{`Max Weight: ${selectedAnimal.maxWeight.kg} kg`}</DialogContentText>
              <Typography>
                {`Silver: ${selectedAnimal.trophyScore.silver}`}
              </Typography>
              <Typography>
                {`Gold: ${selectedAnimal.trophyScore.gold}`}
              </Typography>
              <Typography>
                {`Diamond: ${selectedAnimal.trophyScore.diamond}`}
              </Typography>
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
