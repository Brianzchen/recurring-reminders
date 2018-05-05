import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
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
            onDelete={props.actions.push}
          />
        ))
      }
    </div>
  </div>
);

UpcomingReminders.propTypes = {
  reminders: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  reminders: state.reminders.upcoming,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    push,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingReminders);
