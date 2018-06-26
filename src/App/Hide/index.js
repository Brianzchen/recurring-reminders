import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { hide } from 'reducers/app/actions';

import HideButton from './HideButton';
import Overlay from './Overlay';

const Hide = props => (
  <Fragment>
    <HideButton
      onClick={() => { props.actions.hide(); }}
    />
    {
      props.hidden &&
      <Overlay />
    }
  </Fragment>
);

Hide.propTypes = {
  hidden: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  hidden: state.app.hidden,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    hide,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hide);
