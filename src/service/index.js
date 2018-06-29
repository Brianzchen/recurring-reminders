import saveNote from './saveNote';

import getQuote from './getQuote';
import hide from './hide';
import reminders from './reminders';
import todos from './todos';

export default {
  getQuote,
  ...hide,
  ...reminders,
  saveNote,
  ...todos,
};
