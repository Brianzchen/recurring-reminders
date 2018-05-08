import * as constants from './constants';

export const onNoteChange = value => (
  (dispatch, getState, { service }) => {
    dispatch({
      type: constants.SET_NOTE_VALUE,
      payload: {
        value,
      },
    });
  }
);
