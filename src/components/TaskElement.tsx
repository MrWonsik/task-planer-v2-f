import { IconButton, Paper, Typography } from "@mui/material"
import { Check, DeleteForever, Undo } from "@mui/icons-material"
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
        backgroundColor: theme.colorLight2,
        textDecoration: "line-through"
    },
    buttons: {
        display: "none"
    }
}))

export interface Task {
    id: string,
    title: string,
    complete: boolean,
    creationDate: number
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
                    {task.complete ?
                        <IconButton aria-label="undo" color="secondary" onClick={() => console.log("not implemented")}>
                            <Undo />
                        </IconButton>
                        :
                        <IconButton aria-label="complete" color="primary" onClick={() => completeTask(task.id)}>
                            <Check />
                        </IconButton>
                    }
                    <IconButton aria-label="Delete" color="secondary" onClick={() => deleteTask(task.id)}>
                        <DeleteForever />
                    </IconButton>
                </div>
            </div>
        </Paper>
    )
}

export default TaskElement;