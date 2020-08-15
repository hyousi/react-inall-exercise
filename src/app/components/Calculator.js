import React, { Component } from 'react';
import Row from './Row';
import '../styles/calc.less';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operandLeft: '',
      operandRight: '',
      operator: '',
      result: '',
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
    const { operandLeft, operator, operandRight } = this.state;
    switch (buttonText) {
      case 'Clear':
        this.setState({ operandLeft: '', operandRight: '', operator: '', result: '' });
        break;
      case '=':
        if (operandLeft && operator && operandRight) {
          const result = eval(operandLeft + operator + operandRight);
          this.setState({ result });
        }
        break;
      case '+':
        if (operandLeft) {
          this.setState({ operator: buttonText });
        }
        break;
      case '-':
        if (operandLeft) {
          this.setState({ operator: buttonText });
        }
        break;
      case '✕':
        if (operandLeft) {
          this.setState({ operator: '*' });
        }
        break;
      default:
        if (!operator) {
          this.setState({ operandLeft: operandLeft + buttonText });
        } else {
          this.setState({ operandRight: operandRight + buttonText });
        }
    }
  }

  render() {
    const {operandLeft, operator, operandRight, result} = this.state;
    return (
      <>
        <h1>在线计算器</h1>
        <div className='calc'>
          <div className='calc-monitor'>
            {result ? result : operandLeft + operator + operandRight}
          </div>
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
