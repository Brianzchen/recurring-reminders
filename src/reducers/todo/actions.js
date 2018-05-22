import generateUid from 'lib/generateUid';

import * as constants from './constants';

export const getTodos = () => (
  (dispatch, getState, { service }) => {
    // service to get todos and return it
    dispatch({
      type: constants.GET_TODOS,
      payload: {
        todos: [],
      },
    });
  }
);

export const addTodo = name => (
  (dispatch, getState, { service }) => {
    // service call to store and return all todos?
    dispatch({
      type: constants.ADD_TODO,
      payload: {
        todos: [
          ...getState().todo.todos,
          {
            uid: generateUid(),
            name,
          },
        ],
      },
    });
  }
);
