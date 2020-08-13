import React, { Component } from 'react';
import Row from './Row';
import Col from './Col';
import { Link } from 'react-router-dom';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      isStarted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: Number(value) });
  }

  handleClick() {
    this.setState({ isStarted: !this.state.isStarted });
  }

  componentDidUpdate() {
    // FIXME: 0 can't start timer.
    const { seconds, isStarted } = this.state;
    console.log(seconds, isStarted);
    if (seconds && isStarted) {
      this.pid = this.pid ? this.pid : setInterval(
        () => this.setState({ seconds: this.state.seconds - 1 }),
        1000
      );
    }
    if (!isStarted || !seconds) {
      clearInterval(this.pid);
      this.pid = null;
      this.setState({ isStarted: false });
    } 
  }

  render() {
    const { seconds, isStarted } = this.state;
    return (
      <>
        <h1>在线倒计时器</h1>
        <Row>
          <Col>
            <Row>
              <label>
                设置时间
                <input name='seconds' onChange={this.handleChange} />
              </label>
            </Row>
            <Row>
              <button onClick={this.handleClick}>
                {isStarted ? 'End' : 'Start'}
              </button>
            </Row>
          </Col>
          {/* <Col>{isStarted ? seconds : '请设置倒计时'}</Col> */}
          <Col>{seconds}</Col>
        </Row>
        <Link to='/'>回到主页</Link>
      </>
    );
  }
}
