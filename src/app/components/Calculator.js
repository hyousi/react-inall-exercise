import React, { Component } from 'react';
import Row from './Row';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monitor: '',
      buttonsText: [
        '+',
        '-',
        '✕',
        '7',
        '8',
        '9',
        '4',
        '5',
        '6',
        '1',
        '2',
        '3',
        '0',
        'Clear',
        '=',
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, buttonText) {
    switch (buttonText) {
      case 'Clear':
        this.setState({ monitor: '' });
        break;
      case '+' || '-' || '✕':
        this.setState({ monitor: this.state.monitor + buttonText });
        break;
      default:
        this.setState({ monitor: this.state.monitor + buttonText });
    }
  }

  render() {
    return (
      <>
        <h1>在线计算器</h1>
        <Row className='monitor'>{this.state.monitor}</Row>
        <Row>
          {this.state.buttonsText.map((buttonText) => (
            <button
              key={`button-${buttonText}`}
              onClick={(e) => this.handleClick(e, buttonText)}>
              {buttonText}
            </button>
          ))}
        </Row>
      </>
    );
  }
}
