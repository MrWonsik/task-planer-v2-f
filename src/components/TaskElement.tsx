import { IconButton, Paper, Typography } from "@mui/material"
import { Check, DeleteForever } from "@mui/icons-material"
import { createUseStyles } from "react-jss"
import { PlannerTheme } from "../Theme"

const useStyle = createUseStyles((theme: PlannerTheme) => ({
    taskContainer: {
        margin: "0px 20px",
        minWidth: theme.minWidth,
        minHeight: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "&:hover": {
            "& $buttons": {
                display: "box"
            }
        }
    },
    task: {
        backgroundColor: theme.colorNeutral
    },
    taskCompleted: {
        backgroundColor: theme.colorLight2
    },
    buttons: {
        display: "none"
    }
}))

export interface Task {
    id: string,
    title: string,
    complete: boolean
}

type TaskElementProps = {
    task: Task,
    completeTask: (id: string) => void,
    deleteTask: (id: string) => void
}

function TaskElement({ task, completeTask, deleteTask }: TaskElementProps): JSX.Element {
    const classes = useStyle();
    return (
        <Paper elevation={1} className={task.complete ? classes.taskCompleted : classes.task}>
            <div className={`${classes.taskContainer} ${task.complete ? classes.taskCompleted : ""}`}>
                <Typography variant="body1">{task.title}</Typography>
                <div className={classes.buttons}>
                    <IconButton aria-label="complete" color="primary" onClick={() => completeTask(task.id)}>
                        <Check />
                    </IconButton>
                    <IconButton aria-label="Delete" color="secondary" onClick={() => deleteTask(task.id)}>
                        <DeleteForever />
                    </IconButton>
                </div>
            </div>
        </Paper>
    )
}

export default TaskElement;