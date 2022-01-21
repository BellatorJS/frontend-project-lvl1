import launchGame from '../index.js';

import { getRandomInt } from '../util.js';

const desctiption = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const generateRound = () => {
  const question = getRandomInt();

  const result = isPrime(question);

  return [question, result];
};
const brainPrime = () => launchGame(desctiption, generateRound);

export default brainPrime;
