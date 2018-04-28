import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { maxHeight } from 'css';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const App = () => (
  <div className={css(styles.container, maxHeight)}>
    <Header />
    <Body />
    <Footer />
  </div>
);

export default App;
