import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    fontSize: '34px',
  },
});

const Separator = () => (
  <div className={css(styles.container)}>
    :
  </div>
);

export default Separator;
