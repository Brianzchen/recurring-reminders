import { todosKey } from 'service/storageKeys';

export default () => new Promise(resolve => {
  const storedTodos = localStorage.getItem(todosKey);

  if (storedTodos === null) {
    resolve([]);
  } else {
    resolve(JSON.parse(storedTodos));
  }
});
