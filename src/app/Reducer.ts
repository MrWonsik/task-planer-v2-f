import { Task } from "../components/TaskElement";

interface PlannerState {
  tasks: Task[];
}

type Action =
  | { type: "add"; data: { newTask: Task } }
  | { type: "remove"; data: { id: string } }
  | { type: "complete"; data: { id: string } }
  | { type: "undo-complete"; data: { id: string } }
  | { type: "reorder-tasks"; data: { startIndex: number, endIndex: number } };

export const initialState: PlannerState = { tasks: [] };

export function reducer(state: PlannerState, action: Action): PlannerState {
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
    case "reorder-tasks":
      const { startIndex, endIndex } = action.data;
      const result = Array.from(state.tasks);
        const [removed] = result.splice(startIndex, 1);
        if (removed) {
            result.splice(endIndex, 0, removed);
        }
      return {
        ...state,
        tasks: result
      }
  }
}
