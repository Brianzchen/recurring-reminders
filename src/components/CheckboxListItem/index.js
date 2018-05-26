import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import { standardFontSize } from 'css';

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
      className={`${css(styles.container, standardFontSize)} ${props.className}`}
      onClick={props.done
        ? props.onUndone
        : props.onDone
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
  className: PropTypes.string,
  done: PropTypes.bool,
  onDone: PropTypes.func,
  onUndone: PropTypes.func,
};

Reminder.defaultProps = {
  className: '',
  done: false,
  onDone: () => {},
  onUndone: () => {},
};

export default Reminder;
