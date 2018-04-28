import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';

const Frequency = props => (
  <div>
    <Icon
      icon={props.selected ? 'radiobox-marked' : 'radiobox-blank'}
    />
    {props.value}
  </div>
);

Frequency.propTypes = {
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Frequency;
