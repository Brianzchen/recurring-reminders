import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import Icon from 'components/Icon';

import { disabled } from 'lib/colors';

const Reminder = props => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      ...props.done
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
      onClick={props.done
        ? props.onDone
        : props.onUndone
      }
    >
      <Icon
        icon={props.done ? 'checkbox-marked' : 'checkbox-blank-outline'}
        className={css(styles.icon)}
      />
      {props.children}
    </div>
  );
};

Reminder.propTypes = {
  children: PropTypes.node.isRequired,
  done: PropTypes.bool,
  onDone: PropTypes.func,
  onUndone: PropTypes.func,
};

Reminder.defaultProps = {
  done: false,
  onDone: () => {},
  onUndone: () => {},
};

export default Reminder;
