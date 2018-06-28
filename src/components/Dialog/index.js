import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { StyleSheet, css } from 'aphrodite';
import keycode from 'keycode';

import Background from 'components/Background';

class Dialog extends React.Component {
  constructor(props) {
    super(props);

    this.keydown = this.keydown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydown);
  }

  keydown(event, props = this.props) {
    switch (keycode(event)) {
      case 'esc':
        props.actions.goBack();
        break;
      default:
    }
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '32px',
        maxHeight: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        borderRadius: '4px',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
      },
    });

    return (
      <Background
        onClick={this.props.actions.goBack}
      >
        <div
          className={css(styles.container)}
          onClick={e => { e.stopPropagation(); }}
        >
          {this.props.children}
        </div>
      </Background>
    );
  }
}

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    goBack,
  }, dispatch),
});

export default connect(undefined, mapDispatchToProps)(Dialog);
