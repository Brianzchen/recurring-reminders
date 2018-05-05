// name (string) - The name of the reminder
// days (number) - Which day of the week the reminder should trigger
//    0 = Su, 1 = M, 2 = Tu, 3 = W, 4 = Th, 5 = F, 6 = Sa
// frequency (number) - how often the reminder should trigger on a week to week basis
//    where frequency is the number of weeks

import { dayMilli, weekMilli } from 'lib/time';

import remindersKey from './remindersKey';
import getReminders from './getReminders';

const getNext = reminder => {
  const { days, frequency } = reminder;
  days.sort();

  const now = new Date();
  const currentDay = now.getDay();
  const currentDayMilli = now.getTime() - (now.getTime() % dayMilli);

  // If the current day of the week if after or equal to the last reminder day
  // of the week. Then we should set the next reminder occurance to be,
  // the first day in the next frequency week
  if (currentDay >= days[days.length - 1]) {
    return (currentDayMilli - (days[0] * dayMilli)) + (frequency * weekMilli);
  }

  // If the current day of the week is before the last reminder day of the week.
  // Then we should find the next day of the week that falls on a reminder day
  // and set that as the next value
  for (let i = 0, len = days.length; i < len; i++) {
    if (Math.sign(currentDay - days[i]) === -1) {
      return currentDayMilli + ((days[i] - currentDay) * dayMilli);
    }
  }

  return currentDayMilli;
};

const createNewReminder = reminder => ({
  uid: `${new Date().getTime()}`,
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
