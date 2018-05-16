import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  label: {
    display: 'inline-block',
    width: '160px',
  },
  mandatoryStar: {
    verticalAlign: 'top',
    fontSize: '12px',
  },
});

const Label = ({ children, mandatory }) => (
  <div className={css(styles.label)}>
    {children}
    {
      mandatory &&
      <span className={css(styles.mandatoryStar)}>
        *
      </span>
    }
    :
  </div>
);

Label.propTypes = {
  children: PropTypes.string.isRequired,
  mandatory: PropTypes.bool,
};

Label.defaultProps = {
  mandatory: false,
};

export default Label;
