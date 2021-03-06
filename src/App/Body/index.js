import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import { getReminders } from 'reducers/reminders/actions';

import OutstandingReminders from './OutstandingReminders';
import Separator from './Separator';
import Todo from './Todo';
import UpcomingReminders from './UpcomingReminders';

class Body extends React.Component {
  constructor(props) {
    super(props);

    props.actions.getReminders();
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        display: 'flex',
        padding: '0 32px',
      },
      left: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      },
    });

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.left)}>
          <OutstandingReminders />
          <Todo />
        </div>
        <Separator />
        <UpcomingReminders />
      </div>
    );
  }
}

Body.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getReminders,
  }, dispatch),
});

export default connect(undefined, mapDispatchToProps)(Body);
