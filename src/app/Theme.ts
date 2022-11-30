import createTheme from "@mui/material/styles/createTheme";
import { Theme as MuiTheme } from "@mui/system";

export interface PlannerColors {
    fontColor: string,
    primaryColor: string,
    backgroundColor: string,
    backgroundColor2: string,
    backgroundColor3: string
}

export const defaultColors: PlannerColors = {
    fontColor: "#12263A",
    primaryColor: "#06BCC1",
    backgroundColor: "#C5D8D1",
    backgroundColor2: "#F4D1AE",
    backgroundColor3: "#F4EDEA"
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
            main: colors.primaryColor,
            contrastText: colors.fontColor
        },
        secondary: {
            main: colors.fontColor
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