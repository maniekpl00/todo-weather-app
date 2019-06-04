import * as actionTypes from './actionTypes';

export function addTask(task) {
  return {
    type: actionTypes.ADD_TASK,
    task
  };
}

export function updateTask(task) {
  return {
    type: actionTypes.UPDATE_TASK,
    task
  };
}

export function removeTask(taskId) {
  return {
    type: actionTypes.REMOVE_TASK,
    taskId
  };
}
