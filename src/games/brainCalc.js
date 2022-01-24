import { getRandomInt } from '../util.js';

import launchGame from '../index.js';

const desctiption = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculation = (operand1, operand2, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      throw new SyntaxError('Wrong input');
  }
  return result;
};

const generateRound = () => {
  const operand1 = getRandomInt();
  const operand2 = getRandomInt();
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = calculation(operand1, operand2, operator);
  return [question, answer];
};

const brainCalc = () => launchGame(desctiption, generateRound);

export default brainCalc;
