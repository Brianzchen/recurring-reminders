import React from 'react';
import PropTypes from 'prop-types';

import CheckboxListItem from 'components/CheckboxListItem';

const Reminder = props => (
  <CheckboxListItem
    done={typeof props.previous !== 'undefined'}
    onDone={() => { props.markReminderComplete(props.uid); }}
    onUndone={() => { props.markReminderUncomplete(props.uid); }}
  >
    {props.name}
  </CheckboxListItem>
);

Reminder.propTypes = {
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  previous: PropTypes.number,
  markReminderComplete: PropTypes.func.isRequired,
  markReminderUncomplete: PropTypes.func.isRequired,
};

Reminder.defaultProps = {
  previous: undefined,
};

export default Reminder;
