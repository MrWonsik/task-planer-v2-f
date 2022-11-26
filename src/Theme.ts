import createTheme from "@mui/material/styles/createTheme";

const colorDark1 = "#12263A";
const colorDark2 = "#06BCC1";
const colorNeutral = "#C5D8D1";
const colorLight1 = "#F4EDEA";
const colorLight2 = "#F4D1AE";

export interface PlannerTheme {
    minWidth: string,
    colorDark1: string,
    colorDark2: string,
    colorNeutral: string,
    colorLight1: string,
    colorLight2: string
  }

export const defaultJssTheme: PlannerTheme = {
    minWidth: "400px",
    colorDark1,
    colorDark2,
    colorNeutral,
    colorLight1,
    colorLight2
}

export const muiTheme = createTheme({
    palette: {
        primary: {
            main: colorDark2,
        },
        secondary: {
            main: colorDark1
        }
    },
});