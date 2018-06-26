import React from 'react';
import { createPortal } from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

import Background from 'components/Background';

import Body from './Body';
import Notification from './Notification';
import Show from './Show';

const dropDownKeyFrame = {
  '0%': {
    top: '-100%',
  },
};

const styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
    animationName: [dropDownKeyFrame],
    animationDuration: '600ms',
  },
});

const Overlay = () => createPortal(
  <Background
    className={css(styles.background)}
  >
    <Show />
    <Notification />
    <Body />
  </Background>,
  document.getElementById('root'),
);

export default Overlay;
