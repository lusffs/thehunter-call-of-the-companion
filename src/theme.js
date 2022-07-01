import { createTheme } from "@material-ui/core/styles";

const theme = createTheme ({
  palette: {
    background: {
      default: "#282c34",
      paper: "#cacaca",
    },
    primary: { main: "#fcba03" },
    secondary: { main: "#904d00" },
  },
});

export default theme;
