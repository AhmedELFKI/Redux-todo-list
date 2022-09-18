import {
  ADD,
  DELETE,
  UPDATE_TASK_DATA,
  UPDATE_TASK_STATE,
  DEFAULT_VISIBILITY,
  UPDATE_VISIBILITY_FILTER,
  EDIT_MODAL_VISIBILITY_FILTER,
} from "../Constants/constants";

const intialState = {
  todos: [
    { id: 1, description: "Redux todo-list", isDone: false },
    { id: 2, description: "React checkpoint", isDone: true },
    { id: 3, description: "Redux state manipulation", isDone: true },
  ],
  visibilityFilter: DEFAULT_VISIBILITY,
  editModalVisibilityFilter: false,
  taskId: 0,
};

function reducers(state = intialState, action) {
  switch (action.type) {
    case ADD:
      return {
        todos: [...state.todos, action.payload],
        visibilityFilter: state.visibilityFilter,
        editModalVisibilityFilter: state.editModalVisibilityFilter,
        taskId: state.taskId,
      };
    case DELETE:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
        visibilityFilter: state.visibilityFilter,
        editModalVisibilityFilter: state.editModalVisibilityFilter,
        taskId: state.taskId,
      };
    case UPDATE_TASK_STATE:
      return {
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, isDone: !todo.isDone }
              : todo
          ),
        ],
        visibilityFilter: state.visibilityFilter,
        editModalVisibilityFilter: state.editModalVisibilityFilter,
        taskId: state.taskId,
      };
    case UPDATE_TASK_DATA:
      return {
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.payload.id ? action.payload : todo
          ),
        ],
        visibilityFilter: state.visibilityFilter,
        editModalVisibilityFilter: state.editModalVisibilityFilter,
        taskId: state.taskId,
      };
    case UPDATE_VISIBILITY_FILTER:
      return {
        todos: [...state.todos],
        visibilityFilter: action.payload,
        editModalVisibilityFilter: state.editModalVisibilityFilter,
        taskId: state.taskId,
      };
    case EDIT_MODAL_VISIBILITY_FILTER:
      return {
        todos: [...state.todos],
        visibilityFilter: state.visibilityFilter,
        editModalVisibilityFilter: true,
        taskId: action.payload,
      };
    default:
      return state;
  }
}

export default reducers;
