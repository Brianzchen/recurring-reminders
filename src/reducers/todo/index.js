import * as constants from './constants';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_TODOS:
      return {
        ...state,
        todos: action.payload.todos,
      };
    case constants.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload.newTodo,
        ],
      };
    default:
      return state;
  }
};
