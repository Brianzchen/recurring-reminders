import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Tab = props => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontWeight: props.active && 'bold',
    },
  });

  return (
    <div className={css(styles.container)}>
      {props.children.props.name}
    </div>
  )
};

export default Tab;
