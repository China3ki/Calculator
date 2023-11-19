class Calculator {
  constructor(firstNumber, secondNumber, sign, result) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.result = result;
    this.sign = sign;
    this.removeFirst = 0;
    this.equalityNum = 0;
  }

  clearCalc() {
    this.firstNumber.textContent = '';
    this.secondNumber.textContent = '';
    this.result.textContent = '0';
    this.removeFirst = 0;
    this.equalityNum = 0;
    this.sign.textContent = '';
  }

  removeNumber() {
    const result = this.result.textContent;
    this.result.textContent = result.slice(0, result.length - 1);
    if (result.length === 1) {
      this.result.textContent = 0;
      this.removeFirst = 0;
    }
  }

  addNumber(number) {
    if (this.removeFirst === 0) {
      this.result.textContent = '';
      this.removeFirst++;
    }

    this.result.textContent += number;
  }

  addSign(sign) {
    this.firstNumber.textContent = this.result.textContent;
    this.sign.textContent = sign;
    this.removeFirst = 0;
    this.equalityNum = 0;
  }

  math() {
    if (this.equalityNum === 0) {
      this.secondNumber.textContent = this.result.textContent;
    } else {
      this.firstNumber.textContent = this.result.textContent;
    }
    if (this.firstNumber.textContent === '') return;
    const firstNumber = parseFloat(this.firstNumber.textContent);
    const secondNumber = parseFloat(this.secondNumber.textContent);
    switch (this.sign.textContent) {
      case '+':
        this.result.textContent = (firstNumber + secondNumber).toFixed(2);
        break;
      case '-':
        this.result.textContent = (firstNumber - secondNumber).toFixed(2);
        break;
      case 'X':
        this.result.textContent = (firstNumber * secondNumber).toFixed(2);
        break;
      case '/':
        this.result.textContent = (firstNumber / secondNumber).toFixed(2);
        break;
      case '^':
        this.result.textContent = (firstNumber ** secondNumber).toFixed(2);
        break;
      default:
        this.result.textContent = 'ERROR';
    }
    this.equalityNum = 1;
    this.removeFirst = 0;
  }
}
const firstNumber = document.querySelector('.panel__num--first');
const panelSign = document.querySelector('.panel__sign');
const secondNumber = document.querySelector('.panel__num--second');
const result = document.querySelector('.panel__result');
const newCalculator = new Calculator(
  firstNumber,
  secondNumber,
  panelSign,
  result
);

document.querySelectorAll('[data-operator=number]').forEach((number) =>
  number.addEventListener('click', (e) => {
    newCalculator.addNumber(e.target.textContent);
  })
);
document
  .querySelectorAll('[data-operator=operator]')
  .forEach((operator) =>
    operator.addEventListener('click', (e) => [
      newCalculator.addSign(e.target.textContent),
    ])
  );
document
  .querySelector('[data-operator=equality]')
  .addEventListener('click', () => {
    newCalculator.math();
  });
document
  .querySelector('[data-operator=clear]')
  .addEventListener('click', () => {
    newCalculator.clearCalc();
  });
document
  .querySelector('[data-operator=remove]')
  .addEventListener('click', () => {
    newCalculator.removeNumber();
  });
