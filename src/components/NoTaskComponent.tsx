import { Typography } from "@mui/material";
import { createUseStyles } from "react-jss";
import complete from '../pusheens/complete.gif';

const useStyle = createUseStyles({
    noTaskContainer: {
        textAlign: "center"
    },
    img: {
        maxWidth: "150px"
    }
})

function NoTaskComponent(): JSX.Element {
    const classes = useStyle();
    return (
        <div className={classes.noTaskContainer}>
            <img src={complete} className={classes.img}/>
            <Typography>All tasks complete!</Typography>
        </div>)
}

export default NoTaskComponent;