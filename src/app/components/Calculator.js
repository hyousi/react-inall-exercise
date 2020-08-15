import React, { Component } from 'react';
import Row from './Row';
import '../styles/calc.less';

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

  buttonStyle(buttonText) {
    switch (buttonText) {
      case '+':
        return 'operator';
        break;
      case '-':
        return 'operator';
        break;
      case '✕':
        return 'operator';
        break;
      case 'Clear':
        return 'clear';
        break;
      case '=':
        return 'equal';
        break;
      default:
        return 'operand';
        break;
    }
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
        <div className='calc'>
          <div className='calc-monitor'>{this.state.monitor}</div>
          <div className='calc-buttons'>
            {this.state.buttonsText.map((buttonText) => (
              <button
                key={`button-${buttonText}`}
                className={this.buttonStyle(buttonText)}
                onClick={(e) => this.handleClick(e, buttonText)}>
                {buttonText}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  }
}
