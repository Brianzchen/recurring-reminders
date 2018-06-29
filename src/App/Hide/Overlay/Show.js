import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import { alternate } from 'lib/colors';

import { show } from 'reducers/app/actions';

const styles = StyleSheet.create({
  button: {
    color: alternate,
    fontSize: '64px',
    cursor: 'pointer',
  },
});

const Show = props => (
  <i
    className={`${css(styles.button)} mdi mdi-chevron-up`}
    onClick={props.onClick}
    title="show"
  />
);

Show.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onClick: show,
};

export default connect(undefined, mapDispatchToProps)(Show);
