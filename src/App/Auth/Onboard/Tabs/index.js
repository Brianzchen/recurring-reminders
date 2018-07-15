import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const Tabs = props => (
  <div>
    <Header {...props} />
    {props.children[props.active]}
  </div>
);

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  active: PropTypes.number,
};

Tabs.defaultProps = {
  active: 0,
};

export default Tabs;
