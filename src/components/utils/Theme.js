import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create a theme instance
const Theme = createTheme({
  typography: {
    fontFamily: "Fira Sans, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#34ABEF",
    },
    secondary: {
      main: "#8C91A3",
    },
  },
});

export default Theme;
