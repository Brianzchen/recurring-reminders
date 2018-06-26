import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';
import { StyleSheet, css } from 'aphrodite';

import { maxHeight } from 'css';

import { addNewReminder, deleteReminder } from 'lib/locations';

import Body from './Body';
import DeleteReminderConfirmation from './DeleteReminderConfirmation';
import Footer from './Footer';
import Header from './Header';
import Hide from './Hide';
import NewReminder from './NewReminder';

const App = props => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      filter: props.hidden && 'blur(5px)',
    },
  });

  return (
    <div className={css(styles.container, maxHeight)}>
      <Header />
      <Body />
      <Footer />
      <Hide />
      <Route path={addNewReminder} component={NewReminder} />
      <Route path={deleteReminder} component={DeleteReminderConfirmation} />
    </div>
  );
};

App.propTypes = {
  hidden: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  hidden: state.app.hidden,
});

export default withRouter(connect(mapStateToProps)(App));
