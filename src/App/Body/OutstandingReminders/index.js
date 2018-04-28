import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import SectionHeader from 'components/SectionHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const OutstandingReminders = () => (
  <div className={css(styles.container)}>
    <SectionHeader value="Outstanding" />
  </div>
);

export default OutstandingReminders;
