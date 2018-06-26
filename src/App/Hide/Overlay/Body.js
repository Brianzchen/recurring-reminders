import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Body = () => (
  <div className={css(styles.container)} />
);

export default Body;
