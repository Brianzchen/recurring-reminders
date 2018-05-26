import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import { primary } from 'lib/colors';

const styles = StyleSheet.create({
  header: {
    marginTop: 0,
    color: primary,
    fontSize: '18px',
    textAlign: 'center',
  },
});

const SectionHeader = props => (
  <h2 className={css(styles.header)}>
    {props.value}
  </h2>
);

SectionHeader.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SectionHeader;
