import launchGame from '../src/index.js';

import { getRandomInt, getRandomIndex } from './util.js';

const rullesOfTheGame = 'What number is missing in the progression?';

const brainProgression = () => {
  const generatedQuestion = () => {
    const progressionLength = getRandomInt(5, 10);
    const commonDifference = getRandomInt(1, 9);
    const startProgression = getRandomInt();

    const progression = [startProgression];
    for (let i = 0; i <= progressionLength; i += 1) {
      progression.push((progression[i] + commonDifference));
    }
    const trueResponce = getRandomIndex(progression);
    const trueResponceIndex = progression.indexOf(trueResponce);
    progression[trueResponceIndex] = '..';
    const questionFormed = progression.join(' ');
    return [questionFormed, trueResponce];
  };
  return launchGame(rullesOfTheGame, generatedQuestion);
};

export default brainProgression;
