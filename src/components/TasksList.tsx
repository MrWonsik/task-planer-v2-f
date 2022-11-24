import Stack from "@mui/material/Stack";
import { Task } from "./TaskElement";
import TaskElement from "./TaskElement";

interface TaskListProps {
    tasks: Task[],
    completeTask: (id: string) => void,
    deleteTask: (id: string) => void
}

function TasksList({ tasks, completeTask, deleteTask }: TaskListProps): JSX.Element {
    return (
        <Stack spacing={2}>
            {tasks.map((task: Task): JSX.Element => <TaskElement
                key={task.id}
                task={task}
                completeTask={completeTask}
                deleteTask={deleteTask} />)}
        </Stack>
    );
}

export default TasksList;
