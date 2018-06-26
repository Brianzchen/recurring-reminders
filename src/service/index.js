import saveNote from './saveNote';

import hide from './hide';
import reminders from './reminders';
import todos from './todos';

export default {
  ...hide,
  ...reminders,
  saveNote,
  ...todos,
};
