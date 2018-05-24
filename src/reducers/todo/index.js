import { map } from 'lodash';

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
    case constants.COMPLETE_TODO:
      return {
        ...state,
        todos: map(state.todos, o => {
          if (o.uid === action.payload.todoUid) {
            return {
              ...o,
              done: true,
            };
          }
          return o;
        }),
      };
    case constants.UNCOMPLETE_REMINDER:
      return {
        ...state,
        todos: map(state.todos, o => {
          if (o.uid === action.payload.todoUid) {
            return {
              ...o,
              done: false,
            };
          }
          return o;
        }),
      };
    default:
      return state;
  }
};
