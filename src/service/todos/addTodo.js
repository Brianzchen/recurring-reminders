import generateUid from 'lib/generateUid';

import { todosKey } from 'service/storageKeys';

import getTodos from './getTodos';

export default todoName => new Promise(resolve => {
  getTodos().then(storedTodos => {
    const newTodo = {
      uid: generateUid(),
      name: todoName,
    };

    localStorage.setItem(
      todosKey,
      JSON.stringify([
        ...storedTodos,
        newTodo,
      ]),
    );
    resolve(newTodo);
  });
});
