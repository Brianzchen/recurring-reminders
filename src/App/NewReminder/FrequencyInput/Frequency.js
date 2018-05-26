import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import { standardFontSize, userSelectNone } from 'css';

import Icon from 'components/Icon';
import Input from 'components/Input';

class Frequency extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      multiplier: 1,
    };
    this.baseState = this.state;

    this.onClick = this.onClick.bind(this);
    this.onMultiplierChange = this.onMultiplierChange.bind(this);
    this.getFrequency = this.getFrequency.bind(this);
    this.highLightInput = this.highLightInput.bind(this);

    this.inputRef = React.createRef();
  }

  onClick() {
    this.props.onClick(this.props.mode, this.getFrequency());
  }

  onMultiplierChange(event) {
    const multiplier = Number(event.target.value);
    if (!Number.isNaN(multiplier)) {
      this.setState({ multiplier }, () => {
        this.props.onMultiplierChange(this.getFrequency());
      });
    }
  }

  getFrequency() {
    return this.state.multiplier * this.props.weight;
  }

  highLightInput() {
    this.inputRef.current.select();
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        display: 'flex',
        alignItems: 'center',
        height: '33px',
        cursor: 'pointer',
      },
      input: {
        marginLeft: '8px',
        width: '48px',
      },
    });

    return (
      <div
        className={css(styles.container, standardFontSize, userSelectNone)}
        onClick={this.onClick}
      >
        <Icon
          icon={this.props.selected ? 'radiobox-marked' : 'radiobox-blank'}
        />
        <span>
          {this.props.label}
        </span>
        {
          this.props.adjustable &&
          this.props.selected &&
          <Input
            inputRef={this.inputRef}
            className={css(styles.input)}
            value={this.state.multiplier}
            onChange={this.onMultiplierChange}
            onClick={this.highLightInput}
          />
        }
      </div>
    );
  }
}

Frequency.propTypes = {
  label: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  adjustable: PropTypes.bool,
  onMultiplierChange: PropTypes.func,
};

Frequency.defaultProps = {
  adjustable: false,
  onMultiplierChange: () => {},
};

export default Frequency;
