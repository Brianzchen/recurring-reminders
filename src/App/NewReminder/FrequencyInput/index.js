import React from 'react';
import keymirror from 'keymirror';

import Frequency from './Frequency';

const modes = keymirror({
  week: null,
  fortnight: null,
  month: null,
});

class FrequencyInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionMode: modes.week,
    };
  }

  render() {
    return (
      <div>
        <Frequency
          value="Week"
          selected={this.state.selectionMode === modes.week}
        />
        <Frequency
          value="Fortnight"
          selected={this.state.selectionMode === modes.fortnight}
        />
        <Frequency
          value="Month"
          selected={this.state.selectionMode === modes.month}
        />
      </div>
    );
  }
}

export default FrequencyInput;
