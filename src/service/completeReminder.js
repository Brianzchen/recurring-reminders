import { find, map } from 'lodash';

import { weekMilli } from 'lib/time';

import getReminders from './getReminders';
import remindersKey from './remindersKey';

const getNext = reminder => {
  return reminder.next + weekMilli;
};

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
