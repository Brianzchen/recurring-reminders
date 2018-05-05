import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  label: {
    display: 'inline-block',
    width: '160px',
  },
});

const Label = ({ children }) => (
  <div className={css(styles.label)}>
    {children}:
  </div>
);

Label.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Label;
