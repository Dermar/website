import { style } from "@vanilla-extract/css";
import {spacing} from "../../shared/styles/spacing";

export const errorWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  boxSizing: 'border-box',
  paddingLeft: spacing[600],
  paddingTop: spacing[600],
});

export const errorSusStyle = style({
  marginRight: 0,
  marginTop: 'auto',
  height: '300px',
  alignSelf: 'self-end'
});
