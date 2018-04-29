import * as constants from './constants';

export const getReminders = () => (
  (dispatch, getState, { service }) => {
    service.getReminders().then(reminders => {
      const outstanding = [];
      const upcoming = [];

      for (let i = 0, len = reminders.length; i < len; i++) {
        const reminder = reminders[i];
        outstanding.push(reminder);
        upcoming.push(reminder);
      }

      dispatch({
        type: constants.SET_UPCOMING_REMINDERS,
        payload: {
          reminders: upcoming,
        },
      });
    });
  }
);

export const addReminder = reminder => (
  (dispatch, getState, { service }) => {
    service.addReminder(reminder);
  }
);

export const deleteReminder = uid => (
  (dispatch, getState, { service }) => {
    service.deleteReminder(uid).then(() => {
      dispatch({
        type: constants.DELETE_REMINDER,
        payload: {
          uid,
        },
      });
    });
  }
);
