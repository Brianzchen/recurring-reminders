import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    padding: '64px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    boxSizing: 'border-box',
  },
  container: {
    padding: '32px',
    borderRadius: '4px',
    backgroundColor: 'white',
  },
});

const Dialog = props => (
  <div
    className={css(styles.background)}
    onClick={props.actions.goBack}
  >
    <div
      className={css(styles.container)}
      onClick={e => { e.stopPropagation(); }}
    >
      {props.children}
    </div>
  </div>
);

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    goBack,
  }, dispatch),
});

export default connect(undefined, mapDispatchToProps)(Dialog);
