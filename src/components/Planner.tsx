import { Box, Container, IconButton, TextField } from "@mui/material"
import { createUseStyles } from "react-jss";
import TasksList from "./TasksList"
import { Task } from "./TaskElement";
import { useReducer, useState } from "react";
import { Add } from "@mui/icons-material";
import { randomUUID } from "../utils/uuidGenerator";
import TopBar from "./TopBar";
import { PlannerTheme } from "../Theme";

const useStyles = createUseStyles((theme: PlannerTheme) => ({
  '@global': {
    body: {
      backgroundColor: theme.colorLight1,
      color: `${theme.colorDark1} !important`
    },
  },
  plannerContainer: {
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
}))

const mockedTasks: Task[] = [
  {
      id: randomUUID(),
      title: "taskName1",
      complete: false,
      creationDate: Date.now() - 1000
  },
  {
      id: randomUUID(),
      title: "taskName2",
      complete: false,
      creationDate: Date.now() - 1000

  },
  {
      id: randomUUID(),
      title: "taskName3",
      complete: false,
      creationDate: Date.now() - 1000
  },
]

interface PlannerState {
  tasks: Task[]
}

type Action =
 | { type: 'add', data: { newTask: Task } }
 | { type: 'remove', data: { id: string } }
 | { type: 'complete', data: { id: string } };

const initialState: PlannerState = { tasks: mockedTasks }

function reducer(state: PlannerState, action: Action) {
  switch(action.type) {
    case "add":
      return {
        ...state,
        tasks: [...state.tasks, action.data.newTask]
      }
    case "remove":
      console.log("remove");
      return {
        ...state,
        tasks: state.tasks.filter((task: Task) => task.id !== action.data.id)
      }
    case "complete":
      console.log("complete");
      return {
        ...state,
        tasks: state.tasks.map((task: Task) => task.id == action.data.id ? { ...task, complete: true } : task)
      }
  }
}

function Planner(): JSX.Element {
  const classes = useStyles();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [state, dispatch] =  useReducer(reducer, initialState);

  const completeTask = (id: string): void => dispatch({ type: "complete", data: { id }});
  const deleteTask = (id: string): void => dispatch({ type: "remove", data: { id }});

  return (
    <Container maxWidth="sm" className={classes.plannerContainer}>
      <TopBar />
      <Box className={classes.plannerContainer} >
        <TextField
          id="standard-basic"
          fullWidth
          label="Add new todo"
          variant="standard"
          onChange={(e) => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}/>
        <IconButton
          aria-label="add"
          onClick={() => {
            dispatch({ type: "add", data:
              { newTask: {id: randomUUID(), title: newTaskTitle, complete: false, creationDate: Date.now() }}}
            );
            setNewTaskTitle("");
          }}
        >
          <Add />
        </IconButton>
        <TasksList tasks={state.tasks} completeTask={completeTask} deleteTask={deleteTask}/>
      </Box>
    </Container >
  )
}

export default Planner