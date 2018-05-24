import { todosKey } from 'service/storageKeys';

import getTodos from './getTodos';

export default todoUid => new Promise(resolve => {
  getTodos().then(storedTodos => {
    localStorage.setItem(
      todosKey,
      JSON.stringify(storedTodos.filter(o => o.uid !== todoUid)),
    );
    resolve();
  });
});
