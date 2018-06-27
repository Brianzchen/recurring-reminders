import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { secondary, alternate } from 'lib/colors';

const styles = StyleSheet.create({
  container: {
    padding: '8px',
    borderRadius: '5px',
    backgroundColor: secondary,
    boxShadow: `0 0 10px 5px ${alternate}`,
  },
});

const Notification = () => (
  <div
    className={css(styles.container)}
  >
    1 active reminder
  </div>
);

export default Notification;
