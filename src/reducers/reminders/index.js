import { findIndex } from 'lodash';

import * as constants from './constants';
import initialState from './initialState';

export default (state = initialState, action) => {
  const nowMilli = new Date().getTime();

  switch (action.type) {
    case constants.SET_REMINDERS: {
      return {
        ...state,
        outstanding: action.payload.reminders.filter(o => o.next <= nowMilli),
        upcoming: action.payload.reminders.filter(o => o.next > nowMilli),
      };
    }
    case constants.ADD_REMINDER:
      return {
        ...state,
        outstanding: [...state.outstanding, action.payload.reminder]
          .filter(o => o.next <= nowMilli),
        upcoming: [...state.upcoming, action.payload.reminder]
          .filter(o => o.next > nowMilli),
      };
    case constants.DELETE_REMINDER:
      return {
        ...state,
        outstanding: state.outstanding.filter(o => o.uid !== action.payload.uid),
        upcoming: state.upcoming.filter(o => o.uid !== action.payload.uid),
      };
    case constants.COMPLETE_REMINDER: {
      const { outstanding } = state;
      const reminderIndex = findIndex(
        state.outstanding,
        { uid: action.payload.reminder.uid },
      );
      outstanding[reminderIndex] = {
        ...outstanding[reminderIndex],
        previous: outstanding[reminderIndex].next,
      };

      return {
        ...state,
        outstanding,
      };
    }
    default:
      return state;
  }
};
