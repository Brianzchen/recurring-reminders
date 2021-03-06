import getReminders from './getReminders';
import { remindersKey } from '../storageKeys';

export default uid => new Promise(resolve => {
  getReminders().then(reminders => {
    localStorage.setItem(
      remindersKey,
      JSON.stringify(reminders.filter(o => o.uid !== uid)),
    );
    resolve();
  });
});
