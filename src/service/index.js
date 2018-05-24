import addReminder from './addReminder';
import deleteReminder from './deleteReminder';
import getReminders from './getReminders';
import completeReminder from './completeReminder';
import uncompleteReminder from './uncompleteReminder';

import saveNote from './saveNote';

import todos from './todos';

export default {
  addReminder,
  deleteReminder,
  getReminders,
  completeReminder,
  uncompleteReminder,
  saveNote,
  ...todos,
};
