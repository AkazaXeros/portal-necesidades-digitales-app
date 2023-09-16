import { createTheme } from "@mui/material/styles";
import { cyan, yellow } from "@mui/material/colors";

const Theme = createTheme({
  palette: {
    primary: {
      main: cyan[800],
      complementary: "#ffffff",
    },
    secondary: {
      main: yellow[700],
      complementary: "#ffffff",
    },
  },
});

export default Theme;
