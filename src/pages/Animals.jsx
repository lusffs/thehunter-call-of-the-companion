import React, { useState, useRef, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Container,
  Paper,
  Box,
  Toolbar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";

import animals from "_data/animals";
import reserves from "_data/reserves";

import makeStyles from "@material-ui/core/styles/makeStyles";
import useStore from "global-hook-store";
import settingsStore from "store/settings";
import heroImage from "assets/images/518790_screenshots_20200623202515_1.jpg";

export default function Start() {
  const classes = useStyles();
  const [selectedReserve, setSelectedReserve] = useState("all");
  const [headerHeight, setHeaderHeight] = useState(0);
  const toolBarRef = useRef(null);

  const {
    state: { useKiloWeightUnit },
  } = useStore(settingsStore);

  const renderWeight = (weight) => {
    const w = useKiloWeightUnit ? weight.kg : weight.lbs;
    if (w) {
      return (
        <Typography variant="body2">
          <i>{`Min weight: ${w} ${useKiloWeightUnit ? "kg" : "lbs"}`}</i>
        </Typography>
      );
    }
    return null;
  };

  const handleReserveChange = (event) => {
    setSelectedReserve(event.target.value);
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
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="Animals table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">
                      <span role="img" aria-label="Diamond">
                        💎
                      </span>{" "}
                      Requirement
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {animals
                    .sort((a, b) => {
                      return a.name < b.name ? 1 : -1;
                    })
                    .sort((a, b) => {
                      return a.class > b.class ? 1 : -1;
                    })
                    .filter((animal) => {
                      if (selectedReserve === "all") {
                        return true;
                      }
                      return animal.reserves.indexOf(selectedReserve) > -1;
                    })
                    .map((animal, index) => (
                      <TableRow key={animal._id + index}>
                        <TableCell component="th" scope="row">
                          <Typography variant="body1">{animal.name}</Typography>
                          <Typography variant="body2">
                            <i>{`Class: ${animal.class}`}</i>
                          </Typography>
                          <Typography variant="body2">
                            <i>{`Max level: ${animal.maxLevel}`}</i>
                          </Typography>
                        </TableCell>
                        <TableCell align="right" className={classes.noWrap}>
                          <Typography variant="body1">
                            {`${animal.diamondRequirement.trophyRating} 🏆`}
                          </Typography>
                          {renderWeight(animal.diamondRequirement.weight)}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

const useStyles = makeStyles(({ spacing }) => ({
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
  table: {
    minWidth: "100%",
  },
  noWrap: { whiteSpace: "nowrap" },
  formControl: {
    margin: spacing(1),
    minWidth: 120,
  },
}));
