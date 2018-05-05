import { find } from 'lodash';

import getReminders from './getReminders';

export default uid => new Promise(resolve => {
  getReminders().then(reminders => {
    const reminder = find(reminders, { uid });


    resolve(reminder);
  });
});
