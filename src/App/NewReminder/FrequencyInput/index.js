import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import keymirror from 'keymirror';

import Label from 'components/Label';

import Frequency from './Frequency';

const frequencyModes = keymirror({
  week: null,
  fortnight: null,
  month: null,
});

class FrequencyInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionMode: frequencyModes.week,
    };
  }

  onChange = (selectionMode, frequency) => {
    this.setState({ selectionMode });
    this.props.onFrequencySelect(frequency);
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        display: 'flex',
        width: '100%',
        margin: '8px 0',
        alignItems: 'top',
      },
      frequencies: {
        flex: 1,
      },
    });

    return (
      <div className={css(styles.container)}>
        <Label>
          Every
        </Label>
        <div className={css(styles.frequencies)}>
          <Frequency
            label="Week"
            weight={1}
            mode={frequencyModes.week}
            selected={this.state.selectionMode === frequencyModes.week}
            onClick={this.onChange}
            adjustable
            onMultiplierChange={this.props.onFrequencySelect}
          />
          <Frequency
            label="Fortnight"
            weight={2}
            mode={frequencyModes.fortnight}
            selected={this.state.selectionMode === frequencyModes.fortnight}
            onClick={this.onChange}
          />
          <Frequency
            label="Month (28 days)"
            weight={4}
            mode={frequencyModes.month}
            selected={this.state.selectionMode === frequencyModes.month}
            onClick={this.onChange}
            adjustable
            onMultiplierChange={this.props.onFrequencySelect}
          />
        </div>
      </div>
    );
  }
}

FrequencyInput.propTypes = {
  onFrequencySelect: PropTypes.func.isRequired,
};

export default FrequencyInput;
