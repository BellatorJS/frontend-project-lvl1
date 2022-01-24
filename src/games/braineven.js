import getRandomInt from '../util.js';

import launchGame from '../index.js';

const isEven = (number) => ((number % 2 === 0));

const desctiption = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkNumber = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};
const generateRound = () => {
  const question = getRandomInt();
  const answer = checkNumber(question);
  return [question, answer];
};
const brainEven = () => launchGame(desctiption, generateRound);

export default brainEven;
