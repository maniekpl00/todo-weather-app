import * as actionTypes from './actionTypes';
import taskService from '../../services/taskService';

export function addTask(task) {
  return {
    type: actionTypes.ADD_TASK,
    tasks: taskService.addTask(task),
  };
}

export function updateTask(task) {
  return {
    type: actionTypes.UPDATE_TASK,
    tasks: taskService.updateTask(task),
  };
}

export function removeTask(taskId) {
  return {
    type: actionTypes.REMOVE_TASK,
    tasks: taskService.removeTask(taskId),
  };
}
