import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { map } from 'lodash';

import SectionHeader from 'components/SectionHeader';

import { getTodos } from 'reducers/todo/actions';

import NewTodo from './NewTodo';
import TodoItem from './TodoItem';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    props.actions.getTodos();
  }

  render() {
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

    return (
      <div className={css(styles.container)}>
        <SectionHeader value="Todo" />
        <div className={css(styles.list)}>
          {
            map(this.props.todos, o => (
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
  }
}

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todo.todos,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getTodos,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
