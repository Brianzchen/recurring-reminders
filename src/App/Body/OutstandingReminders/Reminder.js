import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import Icon from 'components/Icon';

const styles = StyleSheet.create({
  container: {
    cursor: 'pointer',
  },
});

const Reminder = props => (
  <div className={css(styles.container)}>
    <Icon
      icon="checkbox-blank-outline"
    />
    {props.name}
  </div>
);

Reminder.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Reminder;
