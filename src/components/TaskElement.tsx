import { IconButton, Paper, Typography } from "@mui/material"
import { Check, DeleteForever } from "@mui/icons-material"
import { createUseStyles } from "react-jss"

const useStyle = createUseStyles({
    taskContainer: {
        margin: "0px 20px",
        minWidth: "200px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
})

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
        <Paper elevation={1}>
            <div className={classes.taskContainer}>
                <Typography variant="body1">{task.title}</Typography>
                <div>
                    <IconButton aria-label="complete" color="success" onClick={() => completeTask(task.id)}>
                        <Check />
                    </IconButton>
                    <IconButton aria-label="Delete" color="error" onClick={() => deleteTask(task.id)}>
                        <DeleteForever />
                    </IconButton>
                </div>
            </div>
        </Paper>
    )
}

export default TaskElement;