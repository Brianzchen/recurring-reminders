import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import Icon from 'components/Icon';

import { disabled } from 'lib/colors';

const Reminder = props => {
  const done = typeof props.previous === 'undefined';

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
      onClick={props.onClick}
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
  name: PropTypes.string.isRequired,
  previous: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

Reminder.defaultProps = {
  previous: undefined,
};

export default Reminder;
