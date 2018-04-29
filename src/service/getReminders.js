import remindersKey from './remindersKey';

export default () => new Promise(resolve => {
  const storedReminders = localStorage.getItem(remindersKey);

  if (storedReminders === null) {
    resolve([]);
  } else {
    resolve(JSON.parse(storedReminders));
  }
});
