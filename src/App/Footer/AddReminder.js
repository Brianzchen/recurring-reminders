import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StyleSheet, css } from 'aphrodite';

import { userSelectNone } from 'css';

import Icon from 'components/Icon';

import { primary, alternate } from 'lib/colors';
import { addNewReminder } from 'lib/locations';

const buttonSize = '48px';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
    color: alternate,
    padding: '12px',
    borderRadius: '99px',
    ':hover': {
      opacity: 0.8,
    },
  },
  icon: {
    height: buttonSize,
    width: buttonSize,
    fontSize: buttonSize,
    lineHeight: buttonSize,
    cursor: 'pointer',
  },
});

const AddReminder = props => (
  <div
    className={css(styles.container)}
  >
    <div
      className={css(styles.circle, userSelectNone)}
      onClick={() => { props.actions.push(addNewReminder); }}
    >
      <Icon
        icon="plus"
        className={css(styles.icon)}
        title="Add new reminder"
      />
    </div>
  </div>
);

AddReminder.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    push,
  }, dispatch),
});

export default connect(undefined, mapDispatchToProps)(AddReminder);