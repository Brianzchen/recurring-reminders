import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import Icon from 'components/Icon';

import { disabled } from 'lib/colors';

const Reminder = props => {
  const done = typeof props.previous !== 'undefined';

  const styles = StyleSheet.create({
    container: {
      ...done
        ? {
          fontStyle: 'italic',
          textDecoration: 'line-through',
          color: disabled,
        }
        : {},
      cursor: 'pointer',
    },
    icon: {
      marginRight: '8px',
    },
  });

  return (
    <div
      className={css(styles.container)}
      onClick={() => {
        done
          ? props.markReminderUncomplete(props.uid)
          : props.markReminderComplete(props.uid);
      }
      }
    >
      <Icon
        icon={done ? 'checkbox-marked' : 'checkbox-blank-outline'}
        className={css(styles.icon)}
      />
      {props.name}
    </div>
  );
};

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
