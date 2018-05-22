import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { map } from 'lodash';

import SectionHeader from 'components/SectionHeader';

import NewTodo from './NewTodo';
import TodoItem from './TodoItem';

const Todo = props => (
  <div>
    <SectionHeader value="Todo" />
    {
      map(props.todos, o => (
        <TodoItem
          key={o.uid}
          {...o}
        />
      ))
    }
    <NewTodo />
  </div>
);

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps)(Todo);
