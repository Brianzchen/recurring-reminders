import * as constants from './constants';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_NOTE_VALUE:
      return {
        ...state,
        value: action.payload.value,
      };
    default:
      return state;
  }
};
