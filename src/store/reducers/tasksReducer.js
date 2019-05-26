import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function tasksReducer(state = initialState.tasks, action) {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return state;

    default:
      return state;
  }
}
