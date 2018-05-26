import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import Input from 'components/Input';
import Label from 'components/Label';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
  },
  input: {
    flex: 1,
  },
});
const StartDate = props => (
  <div className={css(styles.container)}>
    <Label>
      Start after
    </Label>
    <Input
      className={css(styles.input)}
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
