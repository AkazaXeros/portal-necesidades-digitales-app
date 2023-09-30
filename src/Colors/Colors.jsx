// Importing component from Meterial UI
import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#0277bd",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F3AA60",
      contrastText: "#EEEEEE",
    },
    backup: {
      main: "#fff",
    },
  },
});

export default Theme;
