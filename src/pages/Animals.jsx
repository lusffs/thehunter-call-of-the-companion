import React from "react";
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
} from "@material-ui/core";

import animals from "_data/animals";

import makeStyles from "@material-ui/core/styles/makeStyles";

export default function Start() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Grid container alignContent="center" alignItems="center">
          <Grid item xs={12}>
            <Box my={3}>
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  aria-label="simple table"
                  size="small"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="center">Class</TableCell>
                      <TableCell align="center">Max Level</TableCell>
                      <TableCell align="right">
                        <span role="img" aria-label="Diamond">
                          💎 Requirement
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {animals.map((animal) => (
                      <TableRow key={animal._id}>
                        <TableCell component="th" scope="row">
                          {animal.name}
                        </TableCell>
                        <TableCell align="center">{animal.class}</TableCell>
                        <TableCell align="center">{animal.maxLevel}</TableCell>

                        <TableCell align="right" className={classes.noWrap}>
                          {`${animal.diamondRequirement.trophyRating} ${
                            animal.diamondRequirement.weight.kg
                              ? `(${animal.diamondRequirement.weight.kg} kg)`
                              : ""
                          } 🏆`}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

const useStyles = makeStyles(() => ({
  table: {
    minWidth: "100%",
  },
  noWrap: { whiteSpace: "nowrap" },
}));
