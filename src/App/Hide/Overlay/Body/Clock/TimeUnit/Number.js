import React from 'react';
import PropTypes from 'prop-types';

class Number extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.children !== nextProps.children;
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Number.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Number;
