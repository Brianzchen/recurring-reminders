import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { primary } from 'lib/colors';

const styles = StyleSheet.create({
  header: {
    color: primary,
    fontSize: '24px',
    textAlign: 'center',
  },
});

const Header = () => (
  <h1 className={css(styles.header)}>
    Recurring Reminders
  </h1>
);

export default Header;
