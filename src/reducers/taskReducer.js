import { FETCH_TASKS_BEGIN, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, TOGGLE_TASK } from '../actions/taskActions';

const initialState = {
  tasks: [],
  loading: false,
  error: null
};

export default function taskReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TASKS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload.tasks
      };

    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        tasks: []
      };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, completed: !task.completed } : task
        )
      };

    default:
      return state;
  }
}
