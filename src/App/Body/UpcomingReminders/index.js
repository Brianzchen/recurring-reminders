import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { map } from 'lodash';

import SectionHeader from 'components/SectionHeader';

import Reminder from './Reminder';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const UpcomingReminders = props => (
  <div className={css(styles.container)}>
    <SectionHeader value="Upcoming" />
    <div>
      {
        map(props.reminders, o => (
          <Reminder
            key={o.uid}
            {...o}
          />
        ))
      }
    </div>
  </div>
);

UpcomingReminders.propTypes = {
  reminders: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  reminders: state.reminders.upcoming,
});

export default connect(mapStateToProps)(UpcomingReminders);
