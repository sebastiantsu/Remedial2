import { combineReducers } from 'redux';
import users from './userReducer';
import tasks from './taskReducer';

export default combineReducers({
  users,
  tasks
});
