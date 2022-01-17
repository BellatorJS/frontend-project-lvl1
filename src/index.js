import readlineSync from 'readline-sync';

import { greeting } from '../games/util.js';

const launchGame = (rullesOfTheGame, generatedQuestion) => {
  const userName = greeting();
  console.log(rullesOfTheGame);
  for (let i = 0; i < 3; i += 1) {
    const [questionGame, trueResponce] = generatedQuestion();
    const questionToUser = `Question: ${questionGame} `;
    console.log(questionToUser);
    const userResponce = readlineSync.question('Your answer: ');

    if (userResponce === trueResponce.toString()) {
      console.log('Correct!');
    } else { return console.log(`${userResponce} is wrong answer ;(. Correct answer was ${trueResponce}.\nLet's try again, '${userName}!`); }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
