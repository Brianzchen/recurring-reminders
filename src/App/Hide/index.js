import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import { hide } from 'reducers/app/actions';

import Overlay from './Overlay';

const styles = StyleSheet.create({
  button: {
    position: 'fixed',
    top: 0,
    left: 0,
  },
});

const Hide = props => (
  <Fragment>
    <button
      className={css(styles.button)}
      onClick={() => { props.actions.hide(); }}
    >
      Hide Content
    </button>
    {
      props.hidden &&
      <Overlay />
    }
  </Fragment>
);

Hide.propTypes = {
  hidden: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  hidden: state.app.hidden,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    hide,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hide);
