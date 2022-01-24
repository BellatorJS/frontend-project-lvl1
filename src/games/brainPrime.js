import launchGame from '../index.js';

import getRandomInt from '../util.js';

const desctiption = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const generateRound = () => {
  const question = getRandomInt();

  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};
const brainPrime = () => launchGame(desctiption, generateRound);

export default brainPrime;
