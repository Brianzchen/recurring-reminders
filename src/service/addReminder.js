// name (string) - The name of the reminder
// days (number) - Which day of the week the reminder should trigger
//    0 = Su, 1 = M, 2 = Tu, 3 = W, 4 = Th, 5 = F, 6 = Sa
// frequency (number) - how often the reminder should trigger on a week to week basis
//    where frequency is the number of weeks

import generateUid from 'lib/generateUid';

import { remindersKey } from './storageKeys';
import getNext from './getNext';
import getReminders from './getReminders';

const createNewReminder = reminder => ({
  uid: generateUid(),
  name: reminder.name,
  days: reminder.days,
  frequency: reminder.frequency,
  next: getNext(reminder),
  stackable: false, // TODO come from client
});

export default reminder => new Promise(resolve => {
  getReminders().then(storedReminders => {
    const newReminder = createNewReminder(reminder);

    localStorage.setItem(
      remindersKey,
      JSON.stringify([
        ...storedReminders,
        newReminder,
      ]),
    );
    resolve(newReminder);
  });
});
