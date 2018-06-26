import { find, map } from 'lodash';

import getReminders from './getReminders';
import getNext from './getNext';
import { remindersKey } from '../storageKeys';

export default uid => new Promise(resolve => {
  getReminders().then(reminders => {
    const reminder = find(reminders, { uid });

    localStorage.setItem(
      remindersKey,
      JSON.stringify(map(reminders, o => {
        if (o.uid === uid) {
          return {
            ...o,
            next: getNext(reminder),
          };
        }
        return o;
      })),
    );
    resolve(reminder);
  });
});
