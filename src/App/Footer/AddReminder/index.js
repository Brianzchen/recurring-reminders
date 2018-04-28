import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { userSelectNone } from 'css';

import Icon from 'components/Icon';

import { primary, alternate } from 'lib/colors';

const buttonSize = '48px';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
    color: alternate,
    padding: '12px',
    borderRadius: '99px',
  },
  icon: {
    height: buttonSize,
    width: buttonSize,
    fontSize: buttonSize,
    lineHeight: buttonSize,
    cursor: 'pointer',
  },
});

const AddReminder = () => (
  <div className={css(styles.container, userSelectNone)}>
    <Icon
      icon="plus"
      className={css(styles.icon)}
      title="Add new reminder"
    />
  </div>
);

export default AddReminder;
