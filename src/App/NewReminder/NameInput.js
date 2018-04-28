import React from 'react';
import PropTypes from 'prop-types';

class NameInput extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input
          ref={this.inputRef}
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
