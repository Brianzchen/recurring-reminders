import * as constants from './constants';

export const getTodos = () => (
  (dispatch, getState, { service }) => {
    service.getTodos().then(todos => {
      dispatch({
        type: constants.GET_TODOS,
        payload: {
          todos,
        },
      });
    });
  }
);

export const addTodo = name => (
  (dispatch, getState, { service }) => {
    service.addTodo(name).then(newTodo => {
      dispatch({
        type: constants.ADD_TODO,
        payload: {
          newTodo,
        },
      });
    });
  }
);

export const completeTodo = todoUid => (
  (dispatch, getState, { service }) => {
    service.completeTodo(todoUid).then(() => {
      dispatch({
        type: constants.COMPLETE_TODO,
        payload: {
          todoUid,
        },
      });
    });
  }
);
