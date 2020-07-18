import React from "react";

import HotelIcon from "@material-ui/icons/Hotel";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";

export default function NeedZones({ status }) {
  if (status === "Feeding") {
    return <RestaurantIcon fontSize="small" />;
  }

  if (status === "Drinking") {
    return <LocalDrinkIcon fontSize="small" />;
  }
  return <HotelIcon fontSize="small" />;
}
