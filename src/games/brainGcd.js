import getRandomInt from '../util.js';

import launchGame from '../index.js';

const desctiption = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b !== 0) {
    const c = a % b;
    return gcd(b, c);
  }
  return a;
};

const generateRound = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2);
  return [question, answer];
};

const brainGcd = () => launchGame(desctiption, generateRound);

export default brainGcd;
