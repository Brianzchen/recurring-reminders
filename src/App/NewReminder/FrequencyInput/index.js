import React from 'react';
import PropTypes from 'prop-types';
import keymirror from 'keymirror';

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
    return (
      <div>
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
    );
  }
}

FrequencyInput.propTypes = {
  onFrequencySelect: PropTypes.func.isRequired,
};

export default FrequencyInput;
