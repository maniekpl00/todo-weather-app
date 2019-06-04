import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';
import taskService from '../../services/taskService';

export default function tasksReducer(state = initialState.tasks, action) {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return taskService.addTask(action.task);

    case actionTypes.REMOVE_TASK:
      return taskService.removeTask(action.taskId);

    case actionTypes.UPDATE_TASK:
      return taskService.updateTask(action.task);

    default:
      return state;
  }
}
