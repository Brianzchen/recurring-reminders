export const addReminder = reminder => (
  (dispatch, getState, { service }) => {
    service.addReminder(reminder);
  }
);
