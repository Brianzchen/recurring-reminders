import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { goBack } from 'react-router-redux';

import Dialog from 'components/Dialog';

import { deleteReminder } from 'reducers/reminders/actions';

const DeleteReminderConfirmation = props => (
  <Dialog>
    Are you sure you want to delete this reminder?
    <button
      onClick={() => {
        props.actions.deleteReminder(props.match.params.reminderId);
        props.actions.goBack();
      }}
    >
      delete
    </button>
  </Dialog>
);

DeleteReminderConfirmation.propTypes = {
  actions: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    goBack,
    deleteReminder,
  }, dispatch),
});

export default withRouter(connect(undefined, mapDispatchToProps)(DeleteReminderConfirmation));
