import React from 'react';
import PropTypes from 'prop-types';

import CheckboxListItem from 'components/CheckboxListItem';

const TodoItem = props => (
  <CheckboxListItem>
    {props.name}
  </CheckboxListItem>
);

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TodoItem;
