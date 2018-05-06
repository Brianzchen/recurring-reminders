import { dayMilli, weekMilli } from 'lib/time';

export default reminder => {
  const { days, frequency } = reminder;
  days.sort();

  const now = reminder.startDate || new Date();
  const currentDay = now.getDay();
  const currentDayMilli = now.getTime() - (now.getTime() % dayMilli);

  // If the current day of the week if after or equal to the last reminder day
  // of the week. Then we should set the next reminder occurance to be,
  // the first day in the next frequency week
  if (currentDay >= days[days.length - 1]) {
    return (currentDayMilli - ((currentDay - days[0]) * dayMilli)) + (frequency * weekMilli);
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
