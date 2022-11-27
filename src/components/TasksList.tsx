import Stack from "@mui/material/Stack";
import { Task } from "./TaskElement";
import TaskElement from "./TaskElement";
import NoTaskComponent from "./NoTaskComponent";

interface TaskListProps {
    tasks: Task[],
    completeTask: (id: string) => void,
    undoCompleteTask: (id: string) => void,
    deleteTask: (id: string) => void
}

function TasksList({ tasks, completeTask, undoCompleteTask, deleteTask }: TaskListProps): JSX.Element {
    return (
        <Stack spacing={2}>
            {tasks.length ? tasks
            .sort((x, y) => Number(x.complete) - Number(y.complete))
            .sort((x,y) => y.creationDate - x.creationDate)
            .map((task: Task): JSX.Element =>
                <TaskElement
                    key={task.id}
                    task={task}
                    completeTask={completeTask}
                    undoCompleteTask={undoCompleteTask}
                    deleteTask={deleteTask} />
            ) : <NoTaskComponent /> }
        </Stack>
    );
}

export default TasksList;
