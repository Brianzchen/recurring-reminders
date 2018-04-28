import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const OutstandingReminders = () => (
  <div className={css(styles.container)}>
    OutstandingReminders
  </div>
);

export default OutstandingReminders;
