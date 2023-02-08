import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#ffe2e2",
      100: "#ffb1b2",
      200: "#ff7f7f",
      300: "#ff4d4d",
      400: "#fe1d1b",
      500: "#e50501",
      600: "#b30000",
      700: "#810000",
      800: "#4f0000",
      900: "#200000",
    },
    secondary: {
      50: "#ebe6ff",
      100: "#c4b5ff",
      200: "#9d85fb",
      300: "#7655f8",
      400: "#4f24f4",
      500: "#350bdb",
      600: "#2907ab",
      700: "#1d057c",
      800: "#10034c",
      900: "#06001e",
    },
  },
  useSystemColorMode: false,
});
