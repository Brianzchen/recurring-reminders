import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Background from 'components/Background';

import Body from './Body';
import Notification from './Notification';
import Show from './Show';

const styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
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
