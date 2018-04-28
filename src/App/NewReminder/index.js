import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

import Dialog from 'components/Dialog';

import { addReminder } from 'reducers/reminders/actions';

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
    this.baseState = this.state;
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

    if (this.state.name === '' || this.state.days.length === 0) return;

    this.props.actions.addReminder(this.state);
    this.props.actions.goBack();
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

NewReminder.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    goBack,
    addReminder,
  }, dispatch),
});

export default connect(undefined, mapDispatchToProps)(NewReminder);
