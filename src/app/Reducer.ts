import { Task } from "../components/TaskElement";
import { randomUUID } from "../utils/uuidGenerator";

const mockedTasks: Task[] = [
  {
    id: randomUUID(),
    title: "taskName1",
    complete: false,
    creationDate: Date.now() - 1000,
  },
  {
    id: randomUUID(),
    title: "taskName2",
    complete: false,
    creationDate: Date.now() - 1000,
  },
  {
    id: randomUUID(),
    title: "taskName3",
    complete: false,
    creationDate: Date.now() - 1000,
  },
];

interface PlannerState {
  tasks: Task[];
}

type Action =
  | { type: "add"; data: { newTask: Task } }
  | { type: "remove"; data: { id: string } }
  | { type: "complete"; data: { id: string } }
  | { type: "undo-complete"; data: { id: string } };

export const initialState: PlannerState = { tasks: mockedTasks };

export function reducer(state: PlannerState, action: Action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        tasks: [...state.tasks, action.data.newTask],
      };
    case "remove":
      return {
        ...state,
        tasks: state.tasks.filter((task: Task) => task.id !== action.data.id),
      };
    case "complete":
      return {
        ...state,
        tasks: state.tasks.map((task: Task) =>
          task.id == action.data.id ? { ...task, complete: true } : task
        ),
      };
    case "undo-complete":
      return {
        ...state,
        tasks: state.tasks.map((task: Task) =>
          task.id == action.data.id ? { ...task, complete: false } : task
        ),
      };
  }
}
