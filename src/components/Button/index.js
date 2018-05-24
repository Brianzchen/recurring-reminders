import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import { focus as focusCss } from 'css';

import { primary, alternate } from 'lib/colors';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.focus) this.buttonRef.current.focus();
  }

  render() {
    const styles = StyleSheet.create({
      button: {
        color: alternate,
        backgroundColor: primary,
        padding: '8px 12px',
        margin: '24px 0 4px',
        borderRadius: '4px',
        border: 'none',
        outline: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        ':hover': {
          opacity: 0.8,
        },
      },
    });

    const {
      children,
      focus,
      ...otherProps
    } = this.props;

    return (
      <button
        ref={this.buttonRef}
        className={css(styles.button, focusCss)}
        {...otherProps}
      >
        {children.toUpperCase()}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  focus: PropTypes.bool,
};

Button.defaultProps = {
  focus: false,
};

export default Button;
