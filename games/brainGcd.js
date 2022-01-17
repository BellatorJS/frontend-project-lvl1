import { getRandomInt } from './util.js';

import launchGame from '../src/index.js';

const rullesOfTheGame = 'Find the greatest common divisor of given numbers.';

function gcd(n, m) {
  if (m !== 0) {
    const k = n % m;
    return gcd(m, k);
  }
  return n;
}

const brainGcd = () => {
  const generatedQuestion = () => {
    const number1 = getRandomInt();
    const number2 = getRandomInt();
    const questionFormed = `${number1} ${number2}`;
    const trueResponce = gcd(number1, number2);
    return [questionFormed, trueResponce];
  };
  return launchGame(rullesOfTheGame, generatedQuestion);
};

export default brainGcd;
