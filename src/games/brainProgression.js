import launchGame from '../index.js';

import getRandomInt from '../util.js';

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
  const answer = progression[getRandomInt(0, progression.length - 1)];
  const index = progression.indexOf(answer);
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const brainProgression = () => launchGame(desctiption, generateRound);

export default brainProgression;
