import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import { error } from 'lib/colors';

const ErrorMessage = props => {
  const styles = StyleSheet.create({
    message: {
      color: error,
      marginTop: props.value ? '16px' : 0,
      maxHeight: props.value ? '100px' : 0,
      transition: 'max-height 0.5s ease-in, margin 0.25s ease-in',
    },
  });

  return (
    <div className={css(styles.message)}>
      {props.value}
    </div>
  );
};

ErrorMessage.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ErrorMessage;
