import launchGame from '../index.js';

import { getRandomInt, getRandomIndex } from '../util.js';

const desctiption = 'What number is missing in the progression?';

const getProgression = () => {
  const progressionLength = getRandomInt(5, 10);
  const commonDifference = getRandomInt(1, 9);
  const startProgression = getRandomInt();
  const progression = [startProgression];
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push((progression[i] + commonDifference));
  }
  return progression;
};
const generateRound = () => {
  const progression = getProgression();
  const result = getRandomIndex(progression);
  const index = progression.indexOf(result);
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, result];
};

const brainProgression = () => launchGame(desctiption, generateRound);

export default brainProgression;
