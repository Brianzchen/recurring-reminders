import { find } from 'lodash';

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

export const markReminderComplete = uid => (
  (dispatch, getState, { service }) => {
    service.completeReminder(uid).then(reminder => {
      dispatch({
        type: constants.COMPLETE_REMINDER,
        payload: {
          reminder,
        },
      });
    });
  }
);

export const markReminderUncomplete = uid => (
  (dispatch, getState, { service }) => {
    const currentReminder = find(getState().reminders.outstanding, { uid });
    service.uncompleteReminder(uid, currentReminder.previous).then(reminder => {
      dispatch({
        type: constants.UNCOMPLETE_REMINDER,
        payload: {
          reminder,
        },
      });
    });
  }
);
