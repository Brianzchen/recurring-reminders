import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import CheckboxListItem from 'components/CheckboxListItem';

import { addTodo } from 'reducers/todo/actions';

class NewTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
    this.baseState = this.state;
  }

  handleInputChange = event => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  submit = event => {
    event.preventDefault();

    if (this.state.inputValue.length === 0) return;

    this.props.actions.addTodo(this.state.inputValue);
    this.setState(this.baseState);
  }

  render() {
    const styles = StyleSheet.create({
      form: {
        display: 'inline',
      },
      input: {

      },
    });

    return (
      <CheckboxListItem>
        <form
          className={css(styles.form)}
          onSubmit={this.submit}
        >
          <input
            className={css(styles.input)}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </form>
      </CheckboxListItem>
    );
  }
}

NewTodo.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    addTodo,
  }, dispatch),
});

export default connect(undefined, mapDispatchToProps)(NewTodo);
