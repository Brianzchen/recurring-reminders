import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
  },
});

const Header = () => (
  <h1 className={css(styles.header)}>
    Recurring Reminders
  </h1>
);

export default Header;
