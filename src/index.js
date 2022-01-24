import readlineSync from 'readline-sync';

import { greeting } from './util.js';

const launchGame = (rullesOfTheGame, generateRound) => {
  const rounds = 3;
  const userName = greeting();
  console.log(rullesOfTheGame);
  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = generateRound();
    const questionToUser = `Question: ${question} `;
    console.log(questionToUser);
    const userResponce = readlineSync.question('Your answer: ');
    if (userResponce === answer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`${userResponce} is wrong answer ;(. Correct answer was ${answer}.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
