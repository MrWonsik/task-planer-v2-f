import { Task } from "./TaskElement";
import TaskElement from "./TaskElement";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Divider, Stack, Typography } from "@mui/material";
import { createUseStyles } from "react-jss";

interface TaskListProps {
    tasks: Task[],
    reorderTasks: (startIndex: number, endIndex: number) => void,
    completeTask: (id: string) => void,
    undoCompleteTask: (id: string) => void,
    deleteTask: (id: string) => void
}

const useStyle = createUseStyles({
    completeTasksContainer: {
        marginTop: "20px"
    }
})

function TasksList({ tasks, reorderTasks, completeTask, undoCompleteTask, deleteTask }: TaskListProps): JSX.Element {

    const classes = useStyle();

    const onDragEnd = (result: any) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }
        reorderTasks(
            result.source.index,
            result.destination.index
        );
    }

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided: any) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {tasks.filter(task => !task.complete).map((task: Task, index: number): JSX.Element => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided: any) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                marginTop: "15px",
                                                ...provided.draggableProps.style
                                            }}
                                        >
                                            <TaskElement
                                                task={task}
                                                completeTask={completeTask}
                                                undoCompleteTask={undoCompleteTask}
                                                deleteTask={deleteTask} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            {tasks.filter(task => task.complete).length > 0 &&
                <Stack spacing={2} className={classes.completeTasksContainer}>
                    <Divider>
                        <Typography>Complete task</Typography>
                    </Divider>
                    {tasks.filter(task => task.complete).map((task: Task) => (
                        <TaskElement
                            key={task.id}
                            task={task}
                            completeTask={completeTask}
                            undoCompleteTask={undoCompleteTask}
                            deleteTask={deleteTask} />
                    ))}
                </Stack>
            }
        </>
    );
}

export default TasksList;
