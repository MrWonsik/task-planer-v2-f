import { Typography } from "@mui/material";
import { createUseStyles } from "react-jss";
import { Task } from "./TaskElement";
import working from '../pusheens/working.gif';
import complete from '../pusheens/complete.gif';
import search from '../pusheens/search.webp';

const useStyle = createUseStyles({
    noTaskContainer: {
        textAlign: "center"
    },
    img: {
        maxHeight: "150px"
    }
})

function ImageContainer({ tasks }: { tasks: Task[] }): JSX.Element {
    const classes = useStyle();
    switch (true) {
        case tasks.length === 0: {
            return <div className={classes.noTaskContainer}>
                <img src={search} className={classes.img} />
                <Typography>No tasks!</Typography>
            </div>
        }
        case tasks.filter(task => !task.complete).length > 0: {
            return <img src={working} className={classes.img} />
        }
        default: {
            return <div className={classes.noTaskContainer}>
                <img src={complete} className={classes.img} />
                <Typography>All tasks complete!</Typography>
            </div>
        }
    }
}

export default ImageContainer;