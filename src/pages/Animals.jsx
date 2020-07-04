import React, { useState, useRef, useEffect } from "react";

import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import Toolbar from "@material-ui/core/Toolbar";
import TableRow from "@material-ui/core/TableRow";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TableContainer from "@material-ui/core/TableContainer";

import useStore from "global-hook-store";
import settingsStore from "store/settings";

import heroImage from "assets/images/518790_screenshots_20200623202515_1.jpg";
import animals from "_data/animals";
import reserves from "_data/reserves";

export default function Start() {
  const classes = useStyles();
  const [selectedReserve, setSelectedReserve] = useState("Silver Ridge Peaks");
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
          <i>{`Max weight: ${w} ${useKiloWeightUnit ? "kg" : "lbs"}`}</i>
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
                    <TableCell></TableCell>
                    <TableCell style={{ width: "100%" }}>Name</TableCell>
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
                        <TableCell style={{ paddingRight: 0 }}>
                          <Chip label={animal.class} />
                        </TableCell>
                        <TableCell component="th" scope="row" size="small">
                          <Typography variant="body1" component="span">
                            {animal.name}
                          </Typography>
                          <Typography variant="body2">
                            <i>{`Max level: ${animal.maxLevel}`}</i>
                          </Typography>
                        </TableCell>
                        <TableCell
                          align="right"
                          className={classes.noWrap}
                          size="small"
                        >
                          <Typography variant="body1">
                            {`${animal.trophyScore.diamond} 🏆`}
                          </Typography>
                          {renderWeight(animal.maxWeight)}
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
