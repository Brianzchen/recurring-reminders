import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import TimeUnit from './TimeUnit';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 200);
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        display: 'flex',
      },
    });

    return (
      <div className={css(styles.container)}>
        <TimeUnit time={this.state.time.getHours()} />
        <TimeUnit time={this.state.time.getMinutes()} />
        <TimeUnit time={this.state.time.getSeconds()} />
      </div>
    );
  }
}

export default Clock;
