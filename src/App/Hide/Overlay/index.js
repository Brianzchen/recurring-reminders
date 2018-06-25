import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Background from 'components/Background';

import Show from './Show';

const styles = StyleSheet.create({
});

const Overlay = () => (
  <Background>
    <Show />
  </Background>
);

export default Overlay;
