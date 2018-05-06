import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import Label from 'components/Label';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
  },

});
const StartDate = props => (
  <div className={css(styles.container)}>
    <Label>
      Start after
    </Label>
    <input
      type="date"
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);

StartDate.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StartDate;
