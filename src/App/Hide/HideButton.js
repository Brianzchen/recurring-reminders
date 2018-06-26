import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import { primary } from 'lib/colors';

import Icon from 'components/Icon';

const styles = StyleSheet.create({
  button: {
    position: 'fixed',
    top: 0,
    left: 0,
    fontSize: '48px',
    color: primary,
    marginLeft: '9px',
    cursor: 'pointer',
  },
});

const HideButton = props => (
  <Icon
    icon="chevron-down"
    className={css(styles.button)}
    onClick={props.onClick}
    title="hide"
  />
);

HideButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HideButton;
