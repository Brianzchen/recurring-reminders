import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';
import { StyleSheet, css } from 'aphrodite';

import { maxHeight } from 'css';

import { addNewReminder, deleteReminder } from 'lib/locations';

import { bootstrap } from 'reducers/app/actions';

import Auth from './Auth';
import Body from './Body';
import DeleteReminderConfirmation from './DeleteReminderConfirmation';
import Footer from './Footer';
import Header from './Header';
import Hide from './Hide';
import NewReminder from './NewReminder';

class App extends React.Component {
  constructor(props) {
    super(props);

    props.bootstrap();
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        display: 'flex',
        flexDirection: 'column',
        filter: this.props.hidden && 'blur(5px)',
      },
    });

    return (
      <div className={css(styles.container, maxHeight)}>
        <Header />
        <Body />
        <Footer />
        <Hide />
        <Auth />
        <Route path={addNewReminder} component={NewReminder} />
        <Route path={deleteReminder} component={DeleteReminderConfirmation} />
      </div>
    );
  }
}

App.propTypes = {
  hidden: PropTypes.bool.isRequired,
  bootstrap: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  hidden: state.app.hidden,
});

const mapDispatchToProps = {
  bootstrap,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
