import React from "react";

import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";

import NeedZoneIcon from "components/NeedZoneIcon";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
}));

export default function AnimalReserves({ animalReserves }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Typography variant="body1" gutterBottom>
        <b>{"Reserves"}</b>
      </Typography>
      {animalReserves.map((reserve, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === reserve.name}
            elevation={1}
            onChange={handleChange(reserve.name)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{reserve.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container direction="column">
                {reserve.needZones.map((needZone, i) => {
                  const status = needZone.split(";");
                  return (
                    <Grid item key={i}>
                      <Grid container alignItems="center">
                        <NeedZoneIcon status={status[1]} />
                        <Typography
                          variant="body2"
                          component="span"
                          style={{ marginLeft: "0.5em", fontWeight: "bold" }}
                        >
                          {`${status[0].split("-")[0]} - ${
                            status[0].split("-")[1]
                          }`}
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
