import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import AddReminder from './AddReminder';
import Note from './Note';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '32px 0',
  },
});

const Footer = () => (
  <div className={css(styles.container)}>
    <Note />
    <AddReminder />
  </div>
);

export default Footer;
