import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { primary } from 'lib/colors';

const styles = StyleSheet.create({
  container: {
    border: `2px solid ${primary}`,
    margin: '0 32px',
  },
});

const Separator = () => (
  <div className={css(styles.container)} />
);

export default Separator;
