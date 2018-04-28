import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
  const {
    icon,
    className,
    ...otherProps
  } = props;

  return (
    <i
      className={`mdi mdi-${icon} ${className}`}
      {...otherProps}
    />
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
