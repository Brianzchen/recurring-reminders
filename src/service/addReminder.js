// name - The name of the reminder
// days - Which day of the week the reminder should trigger
// frequency - how often the reminder should trigger on a week to week basis
//    where frequency is the number of weeks

const remindersKey = 'recurringReminders';

const createNewReminder = reminder => ({
  name: reminder.name,
  days: reminder.days,

});

export default reminder => new Promise(resolve => {
  const storedReminders = JSON.parse(localStorage.getItem(remindersKey));
  console.log(storedReminders);

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
