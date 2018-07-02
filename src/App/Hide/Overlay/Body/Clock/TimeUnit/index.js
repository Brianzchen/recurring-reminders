import React from 'react';
import PropTypes from 'prop-types';
import { map, padStart } from 'lodash';

import Number from './Number';

const splitTime = time => {
  const timeString = padStart(time.toString(), 2, '0');

  return [
    timeString.substring(0, 1),
    timeString.substring(1),
  ];
};

class TimeUnit extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.time !== nextProps.time;
  }

  render() {
    return (
      <div>
        {
          map(splitTime(this.props.time), (o, i) => (
            <Number key={i}>
              {o}
            </Number>
          ))
        }
      </div>
    );
  }
}

TimeUnit.propTypes = {
  time: PropTypes.number.isRequired,
};

export default TimeUnit;
