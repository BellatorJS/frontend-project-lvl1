import launchGame from '../src/index.js';

import { getRandomInt } from './util.js';

const rullesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  const generatedQuestion = () => {
    const questionFormed = getRandomInt();
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
    const trueResponce = isPrime(questionFormed);

    return [questionFormed, trueResponce];
  };
  return launchGame(rullesOfTheGame, generatedQuestion);
};

export default brainPrime;
