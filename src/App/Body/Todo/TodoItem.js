import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CheckboxListItem from 'components/CheckboxListItem';

import { completeTodo, uncompleteReminder } from 'reducers/todo/actions';

const TodoItem = props => (
  <CheckboxListItem
    done={props.done}
    onDone={() => { props.actions.completeTodo(props.uid); }}
    onUndone={() => { props.actions.uncompleteReminder(props.uid); }}
  >
    {props.name}
  </CheckboxListItem>
);

TodoItem.propTypes = {
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  done: PropTypes.bool,
  actions: PropTypes.object.isRequired,
};

TodoItem.defaultProps = {
  done: false,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    completeTodo,
    uncompleteReminder,
  }, dispatch),
});

export default connect(undefined, mapDispatchToProps)(TodoItem);
