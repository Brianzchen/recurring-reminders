import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  button: {
    position: 'fixed',
    top: 0,
    left: 0,
  },
});

const Hide = () => (
  <Fragment>
    <button
      className={css(styles.button)}
      onClick={() => { console.log('test'); }}
    >
      Hide Content
    </button>
  </Fragment>
);

Hide.propTypes = {
  hidden: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Hide);
