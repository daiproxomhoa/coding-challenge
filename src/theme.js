import { createTheme } from "@mui/material";

export const THEME = createTheme({
  typography: {
    htmlFontSize: 14,
    fontSize: 14,
    button: { textTransform: "none" },
    fontFamily: "Nunito sans",
    h1: { fontSize: 96, lineHeight: "112px", fontWeight: 600 },
    h2: { fontSize: 60, lineHeight: "72px", fontWeight: 600 },
    h3: { fontSize: 48, lineHeight: "56px", fontWeight: 600 },
    h4: { fontSize: 32, lineHeight: "44px", fontWeight: "normal" },
    h5: { fontSize: 24, lineHeight: "34px", fontWeight: "normal" },
    h6: { fontSize: 20, lineHeight: "30px", fontWeight: 600 },
    subtitle1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontSize: "14px",
      lineHeight: "22px",
    },
    caption: {
      fontSize: "12px",
      lineHeight: "18px",
    },
    fontWeightBold: 600,
  },
});
