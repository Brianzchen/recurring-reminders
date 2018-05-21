import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import CheckboxListItem from 'components/CheckboxListItem';

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

    console.log(this.state.inputValue);
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

export default NewTodo;
