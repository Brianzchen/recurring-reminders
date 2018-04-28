import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import SectionHeader from 'components/SectionHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const UpcomingReminders = () => (
  <div className={css(styles.container)}>
    <SectionHeader value="Upcoming" />
  </div>
);

export default UpcomingReminders;
