import { Typography } from "@mui/material";
import { createUseStyles } from "react-jss";
import { Task } from "./TaskElement";
import working from '../pusheens/working.gif';
import complete from '../pusheens/complete.gif';
import search from '../pusheens/search.webp';

const useStyle = createUseStyles({
    taskContainer: {
        marginTop: "15px",
        textAlign: "center"
    },
    img: {
        maxHeight: "150px"
    }
})

function ImageContainer({ tasks }: { tasks: Task[] }): JSX.Element {
    const classes = useStyle();
    const noTasks = tasks.length === 0;
    const anyIncompleteTasks = tasks.filter(task => !task.complete).length > 0;
    const allTasksComplete = !anyIncompleteTasks && tasks.filter(task => task.complete).length > 0;
    switch (true) {
        case noTasks: {
            return <div className={classes.taskContainer}>
                <img src={search} className={classes.img} />
                <Typography>No tasks!</Typography>
            </div>
        }
        case anyIncompleteTasks: {
            return <img src={working} className={classes.img} />
        }
        case allTasksComplete: {
            return <div className={classes.taskContainer}>
                <img src={complete} className={classes.img} />
                <Typography>All tasks complete!</Typography>
            </div>
        }
        default: {
            return <></>
        }
    }
}

export default ImageContainer;