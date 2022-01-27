import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#030407",
    },
    secondary: {
      main: "#6e7073",
      light: "#b4bfc9",
      contrastText: "#c5cedc",
    },
    blue: {
      main: "#2f80ed",
    },
    green: {
      main: "#219653",
      dark: "#6fcf97",
      light: "#c5ecd6",
    },
    purple: {
      main: "#9B51E0",
    },
    black: {
      main: "#000000",
      dark: "#333333",
    },
    white: {
      main: "#ffffff",
    },
    red: {
      main: "#d92530",
      dark: "#8e0343",
      light: "#E81152",
    },
    lightGreen: {
      main: "#0ebb3e",
    },
    lightRed: {
      main: "#ff0000",
    },
    pink: {
      main: "#f5d4c9",
      dark: "#D75792",
      light: "#D04585",
    },
    orange: {
      main: "#ffa800",
    },
    blueDark: {
      main: "#0061ba",
    },
    darkGray: {
      main: "#8a91a2",
      light: "#747474",
    },
    lightGray: {
      main: "#f3f5f9",
      dark: "#9fa2a6",
    },
    shamrock: {
      main: "#17D0AF",
      dark: "#3EB890",
      light: "#7FE8C2",
    },
    navy: {
      main: "#475465",
    },
    yellow: {
      main: "#ffdb00",
    },
    sand: {
      main: "#dfc8b8",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      ipad: 767,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
