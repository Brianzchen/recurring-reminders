import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Clock from './Clock';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Body = () => (
  <div className={css(styles.container)}>
    <Clock />
  </div>
);

export default Body;
