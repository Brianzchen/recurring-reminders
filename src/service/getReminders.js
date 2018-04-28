import remindersKey from './remindersKey';

export default () => new Promise(resolve => {
  const storedReminders = JSON.parse(localStorage.getItem(remindersKey));

  if (storedReminders === null) {
    resolve([]);
  } else {
    resolve(storedReminders);
  }
});
