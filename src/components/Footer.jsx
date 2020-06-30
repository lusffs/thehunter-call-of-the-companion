import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link, Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  footerParagraph: {
    textAlign: "center",
  },
  heart: { color: "red" },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <Container disableGutters maxWidth="md">
        <Box py={3}>
          <Typography variant="body2" className={classes.footerParagraph}>
            {"Made with "}
            <Typography
              variant="body2"
              component="span"
              className={classes.heart}
            >
              {"❤"}
            </Typography>
            {" by "}
            <Link href="https://www.github.com/lusffs" target="_blank">
              Lus
            </Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
