import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Background from 'components/Background';

import Body from './Body';
import Notification from './Notification';
import Show from './Show';

const dropDownKeyFrame = {
  '0%': {
    top: '-100%',
  },
  '75%': {
    top: '-7%',
  },
  '80%': {
    top: '0',
  },
  '90%': {
    top: '-5%',
  },
};

const styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
    animationName: [dropDownKeyFrame],
    animationDuration: '1s',
  },
});

const Overlay = () => (
  <Background
    className={css(styles.background)}
  >
    <Show />
    <Notification />
    <Body />
  </Background>
);

export default Overlay;
