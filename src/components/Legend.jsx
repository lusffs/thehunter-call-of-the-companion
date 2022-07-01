import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SpeedIcon from "@material-ui/icons/Speed";
import HotelIcon from "@material-ui/icons/Hotel";
import ExploreIcon from "@material-ui/icons/Explore";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

export default function Legend() {

  const renderItem = (icon, name) => {
    return (
      <Grid container alignItems="center" spacing={1}>
        <Grid item>{icon}</Grid>
        <Grid item>
          <Typography variant="body1">
            <b>{name}</b>
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Typography gutterBottom variant="h6">
        Legend
      </Typography>
      {renderItem(<HotelIcon />, "Resting")}
      {renderItem(<RestaurantIcon />, "Feeding")}
      {renderItem(<LocalDrinkIcon />, "Drinking")}

      {renderItem(<ExploreIcon />, "No Need zone")}

      {renderItem(<SpeedIcon />, "Max weight")}

      {renderItem(<DoubleArrowIcon />, "Max level")}

      {renderItem(
        <span role="img" aria-label="Diamond">
          💎
        </span>,
        "Diamond trophy rating"
      )}
    </>
  );
}
