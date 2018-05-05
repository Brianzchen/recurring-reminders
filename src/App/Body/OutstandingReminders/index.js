import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { map } from 'lodash';

import SectionHeader from 'components/SectionHeader';

import { markReminderComplete } from 'reducers/reminders/actions';

import Reminder from './Reminder';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const OutstandingReminders = props => (
  <div className={css(styles.container)}>
    <SectionHeader value="Outstanding" />
    {
      map(props.reminders, o => (
        <Reminder
          key={o.uid}
          {...o}
          onClick={props.actions.markReminderComplete}
        />
      ))
    }
  </div>
);

OutstandingReminders.propTypes = {
  reminders: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  reminders: state.reminders.outstanding,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    markReminderComplete,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingReminders);
