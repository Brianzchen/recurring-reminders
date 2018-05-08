import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import { onNoteChange, saveNote } from 'reducers/note/actions';

const styles = StyleSheet.create({
  textArea: {
    flex: 1,
    width: '100%',
    margin: '0 8px',
    resize: 'none',
  },
});

const Note = props => (
  <textarea
    className={css(styles.textArea)}
    value={props.value}
    onChange={e => { props.actions.onNoteChange(e.target.value); }}
    onBlur={props.actions.saveNote}
    placeholder="Personal note"
  />
);

Note.propTypes = {
  value: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  value: state.note.value,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    onNoteChange,
    saveNote,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);
