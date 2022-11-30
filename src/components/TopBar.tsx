import { Add, Check } from "@mui/icons-material";
import { Badge, Fab, Paper, Typography } from "@mui/material";
import { createUseStyles } from "react-jss";
import { JssTheme } from "../app/Theme";

const useStyles = createUseStyles((theme: JssTheme) => ({
    dateContainer: {
        padding: "20px",
        backgroundColor: theme.colors.backgroundColor,
        color: theme.colors.fontColor,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: "20px"
    },
    dateContainerRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        wordSpacing: "5"
    },
    dayOfWeek: {
        fontWeight: "bold",
        color: theme.colors.fontColor,
        fontSize: "40px",
        letterSpacing: "3px"
    },
    day: {
        marginLeft: "10px",
        fontSize: "25px"
    },
    month: {
        marginLeft: "10px",
        letterSpacing: "3px"
    },
    badge: {
        zIndex: 1051
    }
}))

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function TopBar({ inputVisible, addButtonClickedHandler, taskQuantity }:
    { inputVisible: boolean, addButtonClickedHandler: () => void, taskQuantity: number }): JSX.Element {
    const classes = useStyles();
    const now = new Date();
    const currentDayOfWeek = weekday[now.getDay()];
    const currentDay = now.getDate();
    const currentMonth = months[now.getMonth()];

    return (
        <Paper elevation={1} className={classes.dateContainer}>
            <div>
                <Typography className={classes.dayOfWeek}>
                    {currentDayOfWeek},
                </Typography>
                <div className={classes.dateContainerRow}>
                    <Typography className={classes.day}>{currentDay}</Typography>
                    <Typography className={classes.month}>{currentMonth}</Typography>
                </div>
            </div>
            <div>
                <Badge max={10} badgeContent={taskQuantity} color="secondary" overlap="circular" classes={{ badge: classes.badge }}>
                    <Fab color="primary" aria-label="add" onClick={() => addButtonClickedHandler()}>
                        {inputVisible ? <Check /> : <Add />}
                    </Fab>
                </Badge>
            </div>
        </Paper>
    )
}

export default TopBar;