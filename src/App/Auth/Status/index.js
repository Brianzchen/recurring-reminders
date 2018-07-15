import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StyleSheet, css } from 'aphrodite';

import { onboard } from 'lib/locations';

const styles = StyleSheet.create({
  container: {
    position: 'fixed',
    right: 0,
    top: 0,
  },
});

const Status = props => (
  <div
    className={css(styles.container)}
    onClick={() => { props.push(onboard); }}
  >
    Login/Signup
  </div>
);

Status.propTypes = {
  push: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  push,
};

export default connect(undefined, mapDispatchToProps)(Status);
