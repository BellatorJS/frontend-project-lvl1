import { getRandomInt, getRandomIndex } from './util.js';

import launchGame from '../index.js';

const rullesOfTheGame = 'What is the result of the expression?';

const symbolOperation = ['+', '-', '*'];

const brainCalc = () => {
  const generatedQuestion = () => {
    const operand1 = getRandomInt();
    const operand2 = getRandomInt();
    const symbol = getRandomIndex(symbolOperation);
    const questionFormed = `${operand1} ${symbol} ${operand2}`;
    let result = 0;
    switch (symbol) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
      default:
        throw new SyntaxError('Wrong input');
    }
    return [questionFormed, result];
  };
  return launchGame(rullesOfTheGame, generatedQuestion);
};

export default brainCalc;
