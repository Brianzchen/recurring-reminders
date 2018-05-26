import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import { standardFontSize } from 'css';

import CheckboxListItem from 'components/CheckboxListItem';
import Input from 'components/Input';

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
      listItem: {
        marginTop: '28px',
      },
      form: {
        flex: 1,
      },
    });

    return (
      <CheckboxListItem
        className={css(styles.listItem, standardFontSize)}
      >
        <form
          className={css(styles.form)}
          onSubmit={this.submit}
        >
          <Input
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
