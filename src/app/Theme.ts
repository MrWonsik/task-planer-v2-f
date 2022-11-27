import createTheme from "@mui/material/styles/createTheme";
import { Theme as MuiTheme } from "@mui/system";

export interface PlannerColors {
    colorDark1: string,
    colorDark2: string,
    colorNeutral: string,
    colorLight1: string,
    colorLight2: string
}

export const defaultColors: PlannerColors = {
    colorDark1: "#12263A",
    colorDark2: "#06BCC1",
    colorNeutral: "#C5D8D1",
    colorLight1: "#F4D1AE",
    colorLight2: "#F4EDEA"
}

export interface JssTheme {
    maxWidth: string,
    colors: PlannerColors
}


export const jssTheme = (colors: PlannerColors = defaultColors): JssTheme => ({
    maxWidth: "400px",
    colors
})

export const muiTheme = (colors: PlannerColors = defaultColors): MuiTheme => createTheme({
    palette: {
        primary: {
            main: colors.colorDark2,
            contrastText: colors.colorDark1
        },
        secondary: {
            main: colors.colorDark1
        }
    },
});

export interface PlannerTheme {
    mui: MuiTheme,
    jss: JssTheme
}

export const defaultPlannerTheme: PlannerTheme = {
    mui: muiTheme(),
    jss: jssTheme()
}