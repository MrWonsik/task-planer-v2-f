import { Box, Container, TextField } from "@mui/material"
import { createUseStyles } from "react-jss";
import TasksList from "./TasksList"
import { useReducer, useState } from "react";
import { randomUUID } from "../utils/uuidGenerator";
import TopBar from "./TopBar";
import { JssTheme } from "../app/Theme";
import { initialState, reducer } from "../app/Reducer";
import working from '../pusheens/working.gif';
import complete from '../pusheens/complete.gif';

const useStyles = createUseStyles((theme: JssTheme) => ({
  '@global': {
    body: {
      backgroundColor: theme.colors.colorLight2,
      color: `${theme.colors.colorDark1} !important`
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

  return (
    <Container className={classes.container}>
      <TopBar
        inputVisible={inputVisible}
        addButtonClickedHandler={() => inputVisible ? addTask(newTaskTitle) : setInputVisible(true)}
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
        <hr />
        <TasksList tasks={state.tasks} completeTask={completeTask} undoCompleteTask={undoCompleteTask} deleteTask={deleteTask} />
      </Box>
      {state.tasks.length > 0 && (
        state.tasks.filter(task => !task.complete).length > 0
          ? <img src={working} className={classes.img} />
          : <img src={complete} className={classes.img} />
      )}
    </Container >
  )
}

export default Planner