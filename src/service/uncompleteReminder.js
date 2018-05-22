import { find, map } from 'lodash';

import getReminders from './getReminders';
import { remindersKey } from './storageKeys';

export default (uid, previous) => new Promise(resolve => {
  getReminders().then(reminders => {
    const reminder = find(reminders, { uid });

    localStorage.setItem(
      remindersKey,
      JSON.stringify(map(reminders, o => {
        if (o.uid === uid) {
          return {
            ...o,
            next: previous,
          };
        }
        return o;
      })),
    );
    resolve(reminder);
  });
});
