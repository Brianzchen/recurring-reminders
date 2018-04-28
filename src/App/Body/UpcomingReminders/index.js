import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const UpcomingReminders = () => (
  <div className={css(styles.container)}>
    UpcomingReminders
  </div>
);

export default UpcomingReminders;
