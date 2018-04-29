import * as constants from './constants';

export const getReminders = () => (
  (dispatch, getState, { service }) => {
    service.getReminders().then(reminders => {
      dispatch({
        type: constants.SET_REMINDERS,
        payload: {
          reminders,
        },
      });
    });
  }
);

export const addReminder = reminder => (
  (dispatch, getState, { service }) => {
    service.addReminder(reminder).then(newReminder => {
      dispatch({
        type: constants.ADD_REMINDER,
        payload: {
          reminder: newReminder,
        },
      });
    });
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
