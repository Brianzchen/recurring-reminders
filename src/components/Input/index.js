import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import { standardFontSize } from 'css';

import { primary, alternate } from 'lib/colors';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: '4px',
    borderRadius: '2px',
    margin: '1px',
    border: `1px solid ${alternate}`,
    outline: 'none',
    ':focus': {
      border: `1px solid ${primary}`,
    },
  },
});

const Input = props => {
  const {
    inputRef,
    className,
    ...otherProps
  } = props;

  return (
    <input
      ref={props.inputRef}
      className={`${css(styles.input, standardFontSize)} ${props.className}`}
      {...otherProps}
    />
  );
};

Input.propTypes = {
  inputRef: PropTypes.object,
  className: PropTypes.string,
};

Input.defaultProps = {
  inputRef: undefined,
  className: '',
};

export default Input;
