import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StyleSheet, css } from 'aphrodite';

import { userSelectNone } from 'css';

import Icon from 'components/Icon';

import { mapParams, deleteReminder } from 'lib/locations';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  text: {
    flex: 1,
  },
  close: {
    cursor: 'pointer',
  },
});

const Reminder = props => (
  <div className={css(styles.container)}>
    <div className={css(styles.text)}>
      {props.name}
    </div>
    <Icon
      className={css(styles.close, userSelectNone)}
      icon="close"
      title="Delete"
      onClick={() => {
        props.actions.push(
          mapParams(deleteReminder, { reminderId: props.uid }),
        );
      }}
    />
  </div>
);

Reminder.propTypes = {
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    push,
  }, dispatch),
});

export default connect(undefined, mapDispatchToProps)(Reminder);
