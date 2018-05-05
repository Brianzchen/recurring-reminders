import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import { userSelectNone } from 'css';

import Icon from 'components/Icon';

import { mapParams, deleteReminder } from 'lib/locations';
import { dayMilli } from 'lib/time';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  text: {
    flex: 1,
  },
  close: {
    cursor: 'pointer',
  },
});

const Reminder = props => (
  <div className={css(styles.container)}>
    <div className={css(styles.text)}>
      {`
        ${props.name} (in ${Math.round((props.next - new Date().getTime()) / dayMilli)} days)
      `}
    </div>
    <Icon
      className={css(styles.close, userSelectNone)}
      icon="close"
      title="Delete"
      onClick={() => {
        props.onDelete(mapParams(deleteReminder, { reminderId: props.uid }));
      }}
    />
  </div>
);

Reminder.propTypes = {
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  next: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Reminder;
