import * as constants from './constants';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_UPCOMING_REMINDERS:
      return {
        ...state,
        upcoming: action.payload.reminders,
      };
    default:
      return state;
  }
};
