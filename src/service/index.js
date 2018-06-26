import saveNote from './saveNote';

import reminders from './reminders';
import todos from './todos';

export default {
  ...reminders,
  saveNote,
  ...todos,
};
