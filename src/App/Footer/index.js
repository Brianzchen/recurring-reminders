import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import AddReminder from './AddReminder';

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    padding: '4px 0',
  },
});

const Footer = () => (
  <div className={css(styles.container)}>
    <AddReminder />
  </div>
);

export default Footer;
