import React from 'react';

import SectionHeader from 'components/SectionHeader';

import NewTodo from './NewTodo';
import TodoItem from './TodoItem';

const Todo = () => (
  <div>
    <SectionHeader value="Todo" />
    <TodoItem />
    <NewTodo />
  </div>
);

export default Todo;
