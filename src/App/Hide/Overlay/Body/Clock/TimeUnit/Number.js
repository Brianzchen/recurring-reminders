import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class Number extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.children !== nextProps.children;
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        width: '58px',
        fontFamily: "'Orbitron', sans-serif;",
        fontSize: '64px',
        textAlign: 'center',
      },
    });

    return (
      <div className={css(styles.container)}>
        {this.props.children}
      </div>
    );
  }
}

Number.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Number;
