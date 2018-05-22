import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { map } from 'lodash';

import SectionHeader from 'components/SectionHeader';

import NewTodo from './NewTodo';
import TodoItem from './TodoItem';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '50%',
  },
  list: {
    flex: 1,
    overflow: 'auto',
  },
});

const Todo = props => (
  <div className={css(styles.container)}>
    <SectionHeader value="Todo" />
    <div className={css(styles.list)}>
      {
        map(props.todos, o => (
          <TodoItem
            key={o.uid}
            {...o}
          />
        ))
      }
    </div>
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
