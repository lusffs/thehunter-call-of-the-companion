import React, { useState, useRef, useEffect } from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import makeStyles from "@material-ui/core/styles/makeStyles";

import useStore from "global-hook-store";
import huntingMateStore from "store/huntingMate";

import AnimalSummaryCard from "components/AnimalSummaryCard";

import animals from "_data/animals";
import heroImage from "assets/images/background3.jpg";

export default function Start() {
  const classes = useStyles();
  const [selectedSorting, setSelectedSorting] = useState("class");
  const [headerHeight, setHeaderHeight] = useState(0);
  const toolBarRef = useRef(null);

  const {
    state: { selectedReserve },
  } = useStore(huntingMateStore);

  const handleSortingChange = (event) => {
    setSelectedSorting(event.target.value);
  };

  useEffect(() => {
    if (toolBarRef.current) {
      setHeaderHeight(toolBarRef.current.offsetHeight);
    }
  }, [toolBarRef]);

  return (
    <>
      <Toolbar ref={toolBarRef} />
      <Box className={classes.hero}>
        <Box mx={3}>
          <Typography color="primary" variant="h3">
            Animals
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="md" component={Box} my={3}>
        <Grid container alignContent="center" spacing={3}>
          <Grid item xs={12} md={4}>
            <Box
              component={Paper}
              p={3}
              style={{
                position: "sticky",
                top: headerHeight + 24,
              }}
            >
              <Typography gutterBottom variant="h6">
                Filters
              </Typography>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="selected-reserve-label" color="secondary">
                  Order by
                </InputLabel>
                <Select
                  labelId="selected-reserve-label"
                  id="selected-reserve"
                  value={selectedSorting}
                  onChange={handleSortingChange}
                  label="Order by"
                  displayEmpty
                  color="secondary"
                >
                  <MenuItem value="class">Class</MenuItem>
                  <MenuItem value="name">Name</MenuItem>
                  <MenuItem value="maxLevel">Max Level</MenuItem>
                  <MenuItem value="maxWeight">Max Weight</MenuItem>
                  <MenuItem value="trophyRequirement">
                    Trophy Requirement
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid
              className={classes.animalsContainer}
              container
              alignContent="center"
              spacing={0}
              component={Paper}
            >
              {animals
                .sort((a, b) => {
                  // Always sort by name before other sorts
                  return a.name < b.name ? -1 : 1;
                })
                .sort((a, b) => {
                  if (selectedSorting === "class") {
                    return a.class < b.class ? -1 : 1;
                  }
                  if (selectedSorting === "maxLevel") {
                    return a.maxLevel < b.maxLevel ? -1 : 1;
                  }
                  if (selectedSorting === "maxWeight") {
                    return a.maxWeight.kg < b.maxWeight.kg ? -1 : 1;
                  }
                  if (selectedSorting === "trophyRequirement") {
                    return a.trophyScore.diamond < b.trophyScore.diamond
                      ? -1
                      : 1;
                  }

                  return 0;
                })
                .filter((animal) => {
                  if (selectedReserve === "all") {
                    return true;
                  }

                  const reserves = animal.reserves.map((r) => {
                    return r.name;
                  });
                  return reserves && reserves.indexOf(selectedReserve) > -1;
                })
                .map((animal, index) => (
                  <AnimalSummaryCard
                    key={animal._id}
                    animal={animal}
                    reserve={selectedReserve}
                  />
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  hero: {
    backgroundSize: "cover",
    backgroundImage: `url(${heroImage})`,
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
  animalsContainer: {
    [breakpoints.only("xs")]: {
      "&> *:last-child": {
        border: 0,
      },
    },
  },
}));
