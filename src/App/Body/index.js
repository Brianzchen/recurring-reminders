import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import OutstandingReminders from './OutstandingReminders';
import Separator from './Separator';
import UpcomingReminders from './UpcomingReminders';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
});

const Body = () => (
  <div className={css(styles.container)}>
    <OutstandingReminders />
    <Separator />
    <UpcomingReminders />
  </div>
);

export default Body;
