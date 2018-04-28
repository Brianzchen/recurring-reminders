import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import { userSelectNone } from 'css';

import { primary, alternate } from 'lib/colors';

const Day = props => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: props.selected ? alternate : undefined,
      backgroundColor: props.selected ? primary : undefined,
      textAlign: 'center',
      cursor: 'pointer',
    },
  });

  return (
    <div
      className={css(styles.container, userSelectNone)}
      onClick={() => { props.onClick(props.index, props.selected); }}
    >
      {props.value}
    </div>
  );
};

Day.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Day;
