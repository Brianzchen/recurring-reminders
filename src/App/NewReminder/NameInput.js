import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import Label from 'components/Label';

class NameInput extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        display: 'flex',
      },
      input: {
        flex: 1,
      },
    });

    return (
      <div className={css(styles.container)}>
        <Label
          mandatory
        >
          Name
        </Label>
        <input
          ref={this.inputRef}
          className={css(styles.input)}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

NameInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NameInput;
