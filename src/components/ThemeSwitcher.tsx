import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { defaultColors, jssTheme, muiTheme, PlannerColors, PlannerTheme } from "../app/Theme";
import BrushIcon from '@mui/icons-material/Brush';
import { createUseStyles } from "react-jss";
import PaletteIcon from '@mui/icons-material/Palette';

const useStyle = createUseStyles({
    themeSwitcherContainer: {
        position: "absolute",
        top: "20px",
        right: "20px"
    }
})

interface ThemeSwitcherProps {
    setTheme: (theme: PlannerTheme) => void
}

const themes: { icon: JSX.Element, name: string, colors: PlannerColors }[] = [
    {
        icon: <BrushIcon />,
        name: "default",
        colors: defaultColors
    },
    {
        icon: <BrushIcon />,
        name: "dark",
        colors: {
            colorDark1: "#191D32",
            colorDark2: "#282F44",
            colorNeutral: "#453A49",
            colorLight1: "#6D3B47",
            colorLight2: "#BA2C73"
        }
    },
    {
        icon: <BrushIcon />,
        name: "neutral",
        colors: {
            colorDark1: "#0A014F",
            colorDark2: "#CD9FCC",
            colorNeutral: "#E4C2C6",
            colorLight1: "#F6CACA",
            colorLight2: "#FAE8EB"
        }
    },

    {
        icon: <BrushIcon />,
        name: "neutral #2",
        colors: {
            colorDark1: "#495159",
            colorDark2: "#FAC9B8",
            colorNeutral: "#C5DECD",
            colorLight1: "#A1E8CC",
            colorLight2: "#E5D4C0"
        }
    },
];

function ThemeSwitcher({ setTheme }: ThemeSwitcherProps): JSX.Element {
    const classes = useStyle();
    return (
        <div className={classes.themeSwitcherContainer}>
            <SpeedDial
                ariaLabel="SpeedDial playground example"
                icon={<SpeedDialIcon icon={<PaletteIcon />} />}
                direction={"down"}
            >
                {themes.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        onClick={() => setTheme({ mui: muiTheme(action.colors), jss: jssTheme(action.colors) })}
                        FabProps={{
                            sx: {
                                bgcolor: action.colors.colorLight2,
                                color: action.colors.colorDark1,
                              "&:hover": {
                                    bgcolor: action.colors.colorLight2,
                                    color: action.colors.colorNeutral
                                }
                            }
                        }}
                    />
                ))}
            </SpeedDial>
        </div>
    );
}

export default ThemeSwitcher;