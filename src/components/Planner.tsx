import { Box, Container, TextField } from "@mui/material"
import { createUseStyles } from "react-jss";
import TasksList from "./TasksList"
import { useReducer, useState } from "react";
import { randomUUID } from "../utils/uuidGenerator";
import TopBar from "./TopBar";
import { JssTheme } from "../app/Theme";
import { initialState, reducer } from "../app/Reducer";
import ImageContainer from "./ImageContainer";

const useStyles = createUseStyles((theme: JssTheme) => ({
  '@global': {
    body: {
      backgroundColor: theme.colors.backgroundColor3,
      color: `${theme.colors.fontColor} !important`
    },
  },
  container: {
    marginTop: "50px",
    maxWidth: theme.maxWidth,
    textAlign: "center"
  },
  plannerContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  img: {
    maxWidth: "150px"
  }
}))

function Planner(): JSX.Element {
  const classes = useStyles();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputVisible, setInputVisible] = useState(false);

  const completeTask = (id: string): void => dispatch({ type: "complete", data: { id } });
  const undoCompleteTask = (id: string): void => dispatch({ type: "undo-complete", data: { id } });
  const deleteTask = (id: string): void => dispatch({ type: "remove", data: { id } });
  const addTask = (taskTitle: string): void => {
    dispatch({
      type: "add", data:
        { newTask: { id: randomUUID(), title: taskTitle, complete: false, creationDate: Date.now() } }
    });
    setNewTaskTitle("");
    setInputVisible(false);
  }

  const reorderTasks = (startIndex: number, endIndex: number): void => dispatch({ type: "reorder-tasks", data: { startIndex, endIndex }})

  return (
    <Container className={classes.container}>
      <TopBar
        inputVisible={inputVisible}
        addButtonClickedHandler={() => inputVisible ? addTask(newTaskTitle) : setInputVisible(true)}
        taskQuantity={state.tasks.filter(task => !task.complete).length}
      />
      <Box className={classes.plannerContainer} >
        {inputVisible && <TextField
          id="standard-basic"
          fullWidth
          label="Write your task, and push enter..."
          variant="standard"
          onChange={(e) => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}
          onKeyDown={(e) => { if (e.key === "Enter") addTask(newTaskTitle); }} />
        }
        <TasksList tasks={state.tasks} reorderTasks={reorderTasks} completeTask={completeTask} undoCompleteTask={undoCompleteTask} deleteTask={deleteTask} />
      </Box>
      <ImageContainer tasks={state.tasks} />
    </Container >
  )
}

export default Planner