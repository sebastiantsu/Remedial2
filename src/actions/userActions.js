import axios from 'axios';

export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN,
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users },
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: { error },
});

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersBegin());
    return axios.get('/users')
      .then(response => {
        dispatch(fetchUsersSuccess(response.data));
        return response.data;
      })
      .catch(error => dispatch(fetchUsersFailure(error)));
  };
}
