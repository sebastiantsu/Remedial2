import axios from 'axios';

export const FETCH_TASKS_BEGIN = 'FETCH_TASKS_BEGIN';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const fetchTasksBegin = () => ({
  type: FETCH_TASKS_BEGIN,
});

export const fetchTasksSuccess = tasks => ({
  type: FETCH_TASKS_SUCCESS,
  payload: { tasks },
});

export const fetchTasksFailure = error => ({
  type: FETCH_TASKS_FAILURE,
  payload: { error },
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: { id },
});

export function fetchTasks(userId) {
  return dispatch => {
    dispatch(fetchTasksBegin());
    return axios.get(`/todos?userId=${userId}`)
      .then(response => {
        dispatch(fetchTasksSuccess(response.data));
        return response.data;
      })
      .catch(error => dispatch(fetchTasksFailure(error)));
  };
}
