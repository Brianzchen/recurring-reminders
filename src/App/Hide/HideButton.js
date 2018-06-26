import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import Icon from 'components/Icon';

const styles = StyleSheet.create({
  button: {
    position: 'fixed',
    top: 0,
    left: 0,
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
