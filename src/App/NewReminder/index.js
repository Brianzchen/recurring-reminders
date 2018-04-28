import React from 'react';

import Dialog from 'components/Dialog';

import DayInput from './DayInput';
import FrequencyInput from './FrequencyInput';
import NameInput from './NameInput';

class NewReminder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      days: [],
      frequency: 1,
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  }

  onDateSelect = days => {
    this.setState({ days });
  }

  onFrequencySelect = frequency => {
    this.setState({ frequency });
  }

  onSubmit = event => {
    event.preventDefault();

    console.log(this.state);
  }

  render() {
    return (
      <Dialog>
        <form onSubmit={this.onSubmit}>
          <NameInput
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <DayInput
            days={this.state.days}
            onDateSelect={this.onDateSelect}
          />
          <FrequencyInput
            onFrequencySelect={this.onFrequencySelect}
          />
          <button
            type="submit"
          >
            add
          </button>
        </form>
      </Dialog>
    );
  }
}

export default NewReminder;
