import * as constants from './constants';

export const onNoteChange = value => ({
  type: constants.SET_NOTE_VALUE,
  payload: {
    value,
  },
});

export const saveNote = () => (
  (dispatch, getState, { service }) => {
    service.saveNote(getState().note.value);
  }
);
