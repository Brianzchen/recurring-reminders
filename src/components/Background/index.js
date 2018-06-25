import React from 'react';
import PropTypes from 'prop-types';
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
});

const Background = props => (
  <div
    className={css(styles.background)}
    onClick={props.onClick}
  >
    {props.children}
  </div>
);

Background.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Background.defaultProps = {
  children: null,
  onClick: () => {},
};

export default Background;
