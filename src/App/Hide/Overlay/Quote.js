import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import { alternate } from 'lib/colors';

const styles = StyleSheet.create({
  text: {
    color: alternate,
  },
});

const Quote = props => (
  <div className={css(styles.text)}>
    {props.quote}
  </div>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  quote: state.app.quote,
});

export default connect(mapStateToProps)(Quote);
