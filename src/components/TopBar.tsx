import { Paper, Typography } from "@mui/material";
import { createUseStyles } from "react-jss";
import { PlannerTheme } from "../Theme";

const useStyles = createUseStyles((theme: PlannerTheme) => ({
    dateContainer: {
        minWidth: "400px",
        padding: "20px",
        backgroundColor: theme.colorNeutral,
        color: theme.colorDark1,
    },
    dateContainerRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        wordSpacing: "5"
    },
    dayOfWeek: {
        fontWeight: "bold",
        color: theme.colorDark1,
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

}))

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function TopBar(): JSX.Element {
    const classes = useStyles();
    const now = new Date();
    const currentDayOfWeek = weekday[now.getDay()];
    const currentDay = now.getDate();
    const currentMonth = months[now.getMonth()];

    return (
        <Paper elevation={1}  className={classes.dateContainer}>
            <Typography className={classes.dayOfWeek}>
                {currentDayOfWeek},
            </Typography>
            <div className={classes.dateContainerRow}>
                <Typography className={classes.day}>{currentDay}</Typography>
                <Typography className={classes.month}>{currentMonth}</Typography>
            </div>
        </Paper>
    )
}

export default TopBar;