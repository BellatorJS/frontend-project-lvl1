import { getRandomInt } from './util.js';
import launchGame from '../index.js';

const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const checkNumber = (number) => {
  const result = isEven(number);
  return result;
};
const rullesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEven = () => {
  const generatedQuestion = () => {
    const randomNum = getRandomInt();
    const trueAnswer = checkNumber(randomNum);
    return [randomNum, trueAnswer];
  };
  return launchGame(rullesOfTheGame, generatedQuestion);
};
export default brainEven;
