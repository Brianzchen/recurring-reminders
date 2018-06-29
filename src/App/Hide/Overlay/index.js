import React from 'react';
import { createPortal } from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

import Background from 'components/Background';

import Body from './Body';
import Notification from './Notification';
import Quote from './Quote';
import Show from './Show';

const styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
    zIndex: 1000,
  },
});

const Overlay = () => createPortal(
  <Background
    className={css(styles.background)}
  >
    <Show />
    <Notification />
    <Body />
    <Quote />
  </Background>,
  document.getElementById('root'),
);

export default Overlay;
