import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import { primary, alternate } from 'lib/colors';

const styles = StyleSheet.create({
  button: {
    color: alternate,
    backgroundColor: primary,
    padding: '8px 12px',
    margin: '24px 0 4px',
    borderRadius: '4px',
    border: 'none',
    outline: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    ':hover': {
      opacity: 0.8,
    },
  },
});

const Button = props => {
  const { children, ...otherProps } = props;

  return (
    <button
      className={css(styles.button)}
      {...otherProps}
    >
      {children.toUpperCase()}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
