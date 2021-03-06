import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import { secondary, alternate } from 'lib/colors';

const styles = StyleSheet.create({
  container: {
    padding: '8px 16px',
    borderRadius: '5px',
    backgroundColor: secondary,
    boxShadow: `0 0 10px 5px ${alternate}`,
  },
});

const Notification = props => props.reminders > 0 && (
  <div
    className={css(styles.container)}
  >
    You have {props.reminders} oustanding reminder{props.reminders > 1 && 's'}
  </div>
);

Notification.propTypes = {
  reminders: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  reminders: state.reminders.outstanding.length,
});

export default connect(mapStateToProps)(Notification);
