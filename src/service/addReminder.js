// name - The name of the reminder
// days - Which day of the week the reminder should trigger
// frequency - how often the reminder should trigger on a week to week basis
//    where frequency is the number of weeks

export default reminder => new Promise((resolve, reject) => {
  const {
    name,
    days,
    frequency,
  } = reminder;
  console.log(reminder);
  resolve();
});
