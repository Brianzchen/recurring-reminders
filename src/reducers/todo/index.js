import * as constants from './constants';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_TODOS:
    case constants.ADD_TODO:
      return {
        ...state,
        todos: action.payload.todos,
      };
    default:
      return state;
  }
};
