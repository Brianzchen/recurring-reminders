import { find } from 'lodash';

import getReminders from './getReminders';

export default (uid, previous) => new Promise(resolve => {
  getReminders().then(reminders => {
    const reminder = find(reminders, { uid });

    resolve(reminder);
  });
});
