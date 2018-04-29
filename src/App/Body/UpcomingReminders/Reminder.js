import React from 'react';
import PropTypes from 'prop-types';

const Reminder = props => (
  <div>
    {props.name}
  </div>
);

Reminder.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Reminder;
