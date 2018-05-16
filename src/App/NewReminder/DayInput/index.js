import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { map } from 'lodash';

import Label from 'components/Label';

import Day from './Day';

const days = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];

class DayInput extends React.Component {
  calculateDays = (day, selected) => {
    if (selected) {
      this.props.onDateSelect(this.props.days.filter(o => o !== day));
    } else {
      this.props.onDateSelect([...this.props.days, day]);
    }
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        width: '100%',
        display: 'flex',
      },
      days: {
        flex: 1,
        display: 'flex',
      },
    });

    return (
      <div className={css(styles.container)}>
        <Label
          mandatory
        >
          Days
        </Label>
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
      </div>
    );
  }
}

DayInput.propTypes = {
  days: PropTypes.arrayOf(PropTypes.number).isRequired,
  onDateSelect: PropTypes.func.isRequired,
};

export default DayInput;
