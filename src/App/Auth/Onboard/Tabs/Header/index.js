import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { map } from 'lodash';

import Tab from './Tab';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});

const Header = props => (
  <div className={css(styles.container)}>
    {
      map(props.children, (o, i) => (
        <Tab
          key={i}
          active={props.active === i}
        >
          {o}
        </Tab>
      ))
    }
  </div>
);

export default Header;
