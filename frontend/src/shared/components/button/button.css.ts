import { style, styleVariants } from "@vanilla-extract/css";

import { siteColours } from "../../styles/globalStyle.css";
import { spacing } from "../../styles/spacing";

const baseStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing[200],
  boxSizing: "border-box",
  textAlign: "center",
  border: "1px solid transparent",
  borderRadius: spacing[200],
  cursor: "pointer",
  fontFamily: "inherit",
  fontWeight: 600,
  lineHeight: 1,
  textDecoration: "none",
  transition: "background-color 150ms ease, color 150ms ease",
  selectors: {
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  },
});

export const buttonVariantStyle = styleVariants({
  primary: [
    baseStyle,
    {
      backgroundColor: `#${siteColours.dark}`,
      color: siteColours.backgroundColor,
      selectors: {
        "&:hover:not(:disabled)": {
          backgroundColor: `#${siteColours.fifth}`,
        },
      },
    },
  ],
  secondary: [
    baseStyle,
    {
      backgroundColor: `#${siteColours.contrast}`,
      color: siteColours.backgroundColor,
      selectors: {
        "&:hover:not(:disabled)": {
          backgroundColor: `#${siteColours.dark}`,
        },
      },
    },
  ],
  ghost: [
    baseStyle,
    {
      backgroundColor: "transparent",
      borderColor: `#${siteColours.dark}`,
      color: `#${siteColours.dark}`,
      selectors: {
        "&:hover:not(:disabled)": {
          backgroundColor: `#${siteColours.dark}`,
          color: siteColours.backgroundColor,
        },
      },
    },
  ],
});

export const buttonSizeStyle = styleVariants({
  small: {
    fontSize: "13px",
    padding: `${spacing[200]}px ${spacing[300]}px`,
    width: '50px',
  },
  medium: {
    fontSize: "15px",
    padding: `${spacing[300]}px ${spacing[500]}px`,
    width: '100px',
  },
  large: {
    fontSize: "17px",
    padding: `${spacing[400]}px ${spacing[600]}px`,
    width: '200px',
  },
});