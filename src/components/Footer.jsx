import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    borderTop: `3px dashed ${palette.primary.dark}`,
  },
  footerParagraph: {
    textAlign: "center",
  },
  heart: { color: "red" },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.root}>
      <Container disableGutters maxWidth="md">
        <Box py={4}>
          <Typography
            variant="body1"
            color="primary"
            className={classes.footerParagraph}
          >
            {"Made with "}
            <Typography
              variant="body2"
              component="span"
              className={classes.heart}
            >
              {"❤"}
            </Typography>
            {" by "}
            <Link
              rel="noopener"
              href="https://www.github.com/lusffs"
              target="_blank"
            >
              Lus
            </Link>
          </Typography>
        </Box>
      </Container>
    </Grid>
  );
}
