import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { alternate } from 'lib/colors';

import Separator from './Separator';
import TimeUnit from './TimeUnit';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        display: 'flex',
        color: alternate,
      },
    });

    return (
      <div className={css(styles.container)}>
        <TimeUnit time={this.state.time.getHours()} />
        <Separator />
        <TimeUnit time={this.state.time.getMinutes()} />
        <Separator />
        <TimeUnit time={this.state.time.getSeconds()} />
      </div>
    );
  }
}

export default Clock;
