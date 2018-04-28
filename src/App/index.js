import React from 'react';
import { Route } from 'react-router';
import { StyleSheet, css } from 'aphrodite';

import { maxHeight } from 'css';

import { addNewReminder } from 'lib/locations';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import NewReminder from './NewReminder';

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
    <Route path={addNewReminder} component={NewReminder} />
  </div>
);

export default App;
