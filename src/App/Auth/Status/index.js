import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    position: 'fixed',
    right: 0,
    top: 0,
  },
});

const Status = () => (
  <div
    className={css(styles.container)}
    onClick={() => { console.log('hi'); }}
  >
    Login/Signup
  </div>
);

export default Status;
