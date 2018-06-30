import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { StyleSheet, css } from 'aphrodite';
import { padStart } from 'lodash';

import Button from 'components/Button';
import Dialog from 'components/Dialog';

import { addReminder } from 'reducers/reminders/actions';

import DayInput from './DayInput';
import ErrorMessage from './ErrorMessage';
import FrequencyInput from './FrequencyInput';
import NameInput from './NameInput';
import StartDate from './StartDate';

const getStartCalendarDate = () => {
  const now = new Date();
  return `${now.getYear() + 1900}-${padStart(now.getMonth() + 1, 2, '0')}-${padStart(now.getDate(), 2, '0')}`;
};

class NewReminder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      days: [],
      frequency: 1,
      startDate: getStartCalendarDate(),
      errorMessage: '',
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

  onStartDateChange = event => {
    this.setState({
      startDate: event.target.value,
    });
  }

  onSubmit = event => {
    event.preventDefault();

    if (this.state.name === '') {
      this.setState({
        errorMessage: 'Name missing',
      });
      return;
    }
    if (this.state.days.length === 0) {
      this.setState({
        errorMessage: 'No days selected',
      });
      return;
    }

    this.props.actions.addReminder({
      ...this.state,
      startDate: new Date(this.state.startDate),
    });
    this.props.actions.goBack();
  }

  render() {
    const styles = StyleSheet.create({
      form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        overflow: 'auto',
      },
    });

    return (
      <Dialog>
        <form
          className={css(styles.form)}
          onSubmit={this.onSubmit}
        >
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
          <StartDate
            value={this.state.startDate}
            onChange={this.onStartDateChange}
          />
          <ErrorMessage value={this.state.errorMessage} />
          <Button
            type="submit"
          >
            add
          </Button>
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
