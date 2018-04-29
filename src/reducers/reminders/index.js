import * as constants from './constants';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_REMINDERS:
      return {
        ...state,
        outstanding: action.payload.reminders,
        upcoming: action.payload.reminders,
      };
    case constants.ADD_REMINDER:
      return {
        ...state,
        outstanding: [...state.outstanding, action.payload.reminder],
        upcoming: [...state.upcoming, action.payload.reminder],
      };
    case constants.DELETE_REMINDER:
      return {
        ...state,
        outstanding: state.outstanding.filter(o => o.uid !== action.payload.uid),
        upcoming: state.upcoming.filter(o => o.uid !== action.payload.uid),
      };
    default:
      return state;
  }
};
