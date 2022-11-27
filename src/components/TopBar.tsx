import { Add, Check } from "@mui/icons-material";
import { Fab, Paper, Typography } from "@mui/material";
import { createUseStyles } from "react-jss";
import { JssTheme } from "../app/Theme";

const useStyles = createUseStyles((theme: JssTheme) => ({
    dateContainer: {
        padding: "20px",
        backgroundColor: theme.colors.colorNeutral,
        color: theme.colors.colorDark1,
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
        color: theme.colors.colorDark1,
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

function TopBar({ inputVisible, addButtonClickedHandler }:
    { inputVisible: boolean, addButtonClickedHandler: () => void }): JSX.Element {
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
                <Fab color="primary" aria-label="add" onClick={() => addButtonClickedHandler()}>
                    {inputVisible ? <Check /> : <Add /> }
                </Fab>
            </div>
        </Paper>
    )
}

export default TopBar;