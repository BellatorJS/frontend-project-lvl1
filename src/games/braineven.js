import { getRandomInt } from '../util.js';

import launchGame from '../index.js';

const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const desctiption = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkNumber = (number) => {
  const result = isEven(number);
  return result;
};
const generateRound = () => {
  const question = getRandomInt();
  const result = checkNumber(question);
  return [question, result];
};
const brainEven = () => launchGame(desctiption, generateRound);

export default brainEven;
