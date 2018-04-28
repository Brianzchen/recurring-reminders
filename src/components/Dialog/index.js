import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
  },
});

const Dialog = props => (
  <div className={css(styles.background)}>
    <div className={css(styles.container)}>
      {props.children}
    </div>
  </div>
);

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dialog;
