import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Tab = props => (
  <Fragment>
    {props.children}
  </Fragment>
);

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired, // eslint-disable-line
};

export default Tab;
