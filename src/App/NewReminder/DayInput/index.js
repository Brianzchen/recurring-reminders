import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { map } from 'lodash';

import Day from './Day';

const days = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];

const styles = StyleSheet.create({
  days: {
    display: 'flex',
  },
});

class DayInput extends React.Component {
  calculateDays = (day, selected) => {
    if (selected) {
      this.props.onDateSelect(this.props.days.filter(o => o !== day));
    } else {
      this.props.onDateSelect([...this.props.days, day]);
    }
  }

  render() {
    return (
      <div className={css(styles.days)}>
        {
          map(days, (o, i) => (
            <Day
              key={o}
              index={i}
              value={o}
              selected={this.props.days.includes(i)}
              onClick={this.calculateDays}
            />
          ))
        }
      </div>
    );
  }
}

DayInput.propTypes = {
  days: PropTypes.arrayOf(PropTypes.number).isRequired,
  onDateSelect: PropTypes.func.isRequired,
};

export default DayInput;
