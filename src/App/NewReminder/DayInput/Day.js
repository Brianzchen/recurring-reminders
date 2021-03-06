import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import { focus, userSelectNone } from 'css';

import { primary, alternate, disabled, white } from 'lib/colors';

const Day = props => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: '0 2px',
      margin: '4px',
      color: props.selected ? alternate : white,
      backgroundColor: props.selected ? primary : disabled,
      borderRadius: '2px',
      textAlign: 'center',
      cursor: 'pointer',
    },
  });

  return (
    <button
      type="button"
      className={css(styles.container, focus, userSelectNone)}
      onClick={() => { props.onClick(props.index, props.selected); }}
    >
      {props.value}
    </button>
  );
};

Day.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Day;
