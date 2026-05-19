import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2E7D32",
        },
        secondary: {
            main: "#FF9800",
        },
        background: {
            default: "#f5f7fb",
        },
    },
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

export default theme;