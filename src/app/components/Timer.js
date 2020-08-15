import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/timer.less';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      isStarted: false,
      inputVal: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ seconds: Number(value),  inputVal: value});
  }

  handleClick() {
    this.setState({ isStarted: !this.state.isStarted });
  }

  componentDidUpdate() {
    const { seconds, isStarted } = this.state;
    if (isStarted && !this.timerID) {
      this.timerID = setInterval(() => {
            const { seconds } = this.state;
            console.log(`interVal: ${seconds}`);
            this.setState({ seconds: seconds - 1 });
          }, 1000);
    }
    if (seconds === 0 && this.timerID) {
      clearInterval(this.timerID);
      this.timerID = null;
      this.setState({ isStarted: false, inputVal: '' });
    }
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
      this.timerID = null;
    }
  }

  render() {
    const { seconds, isStarted, inputVal } = this.state;
    return (
      <>
        <h1>在线倒计时器</h1>
        <div id='timer'>
          <div id='timer-left'>
            <div>
              <span>设置时间</span>
              <input
                name='seconds'
                onChange={this.handleChange}
                disabled={isStarted}
                value={inputVal}
              />
            </div>

            <button onClick={this.handleClick} disabled={isStarted}>
              {isStarted ? 'End' : 'Start'}
            </button>
          </div>
          <div id='timer-right'>{`${seconds} Seconds`}</div>
        </div>
        <Link to='/'>回到主页</Link>
      </>
    );
  }
}
