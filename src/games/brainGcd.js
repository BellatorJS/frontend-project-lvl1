import { getRandomInt } from '../util.js';

import launchGame from '../index.js';

const desctiption = 'Find the greatest common divisor of given numbers.';

const gcd = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return gcd(m, k);
  }
  return n;
};

const generateRound = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const question = `${number1} ${number2}`;
  const result = gcd(number1, number2);
  return [question, result];
};

const brainGcd = () => launchGame(desctiption, generateRound);

export default brainGcd;
