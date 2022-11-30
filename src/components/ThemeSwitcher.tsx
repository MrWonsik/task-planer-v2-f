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
        name: "neutral",
        colors: {
            fontColor: "#495159",
            primaryColor: "#FAC9B8",
            backgroundColor: "#A1E8CC",
            backgroundColor2: "#C5DECD",
            backgroundColor3: "#E5D4C0"
        }
    },
    {
        icon: <BrushIcon />,
        name: "neutral #2",
        colors: {
            fontColor: "#8D5A97",
            primaryColor: "#B8EBD0",
            backgroundColor: "#A4A5AE",
            backgroundColor2: "#907F9F",
            backgroundColor3: "#B0C7BD"
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
                                bgcolor: action.colors.backgroundColor3,
                                color: action.colors.fontColor,
                              "&:hover": {
                                    bgcolor: action.colors.backgroundColor3,
                                    color: action.colors.backgroundColor
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