import { IconButton, Paper, Typography } from "@mui/material"
import { Check, DeleteForever, Undo } from "@mui/icons-material"
import { createUseStyles } from "react-jss"
import { JssTheme } from "../app/Theme"

const useStyle = createUseStyles((theme: JssTheme) => ({
    taskContainer: {
        margin: "0px 20px",
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
        backgroundColor: theme.colors.colorNeutral
    },
    taskCompleted: {
        backgroundColor: theme.colors.colorLight1,
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
    undoCompleteTask: (id: string) => void,
    deleteTask: (id: string) => void
}

function TaskElement({ task, completeTask, deleteTask, undoCompleteTask }: TaskElementProps): JSX.Element {
    const classes = useStyle();
    return (
        <Paper elevation={1} className={task.complete ? classes.taskCompleted : classes.task}>
            <div className={`${classes.taskContainer} ${task.complete ? classes.taskCompleted : ""}`}>
                <Typography variant="body1">{task.title}</Typography>
                <div className={classes.buttons}>
                    {task.complete ?
                        <IconButton aria-label="undo" color="secondary" onClick={() => undoCompleteTask(task.id)}>
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