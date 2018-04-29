import * as constants from './constants';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_REMINDERS:
      return {
        ...state,
        upcoming: action.payload.reminders,
        outstanding: action.payload.reminders,
      };
    case constants.DELETE_REMINDER:
      return {
        ...state,
        // TODO remove from outstanding and upcoming
      };
    default:
      return state;
  }
};
