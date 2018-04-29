import React from 'react';
import { Route } from 'react-router';
import { StyleSheet, css } from 'aphrodite';

import { maxHeight } from 'css';

import { addNewReminder, deleteReminder } from 'lib/locations';

import Body from './Body';
import DeleteReminderConfirmation from './DeleteReminderConfirmation';
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
    <Route path={deleteReminder} component={DeleteReminderConfirmation} />
  </div>
);

export default App;
