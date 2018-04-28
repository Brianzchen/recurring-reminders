// name (string) - The name of the reminder
// days (number) - Which day of the week the reminder should trigger
//    0 = Su, 1 = M, 2 = Tu, 3 = W, 4 = Th, 5 = F, 6 = Sa
// frequency (number) - how often the reminder should trigger on a week to week basis
//    where frequency is the number of weeks

const remindersKey = 'recurringReminders';

const createNewReminder = reminder => ({
  uid: `${new Date().getTime()}`,
  name: reminder.name,
  days: reminder.days,
  frequency: reminder.frequency,
  last: new Date().getTime(),
});

export default reminder => new Promise(resolve => {
  const storedReminders = JSON.parse(localStorage.getItem(remindersKey));

  const reminders = [];
  if (storedReminders !== null) {
    reminders.push(storedReminders);
  }
  reminders.push(createNewReminder(reminder));

  localStorage.setItem(
    remindersKey,
    JSON.stringify(reminders),
  );

  resolve();
});
