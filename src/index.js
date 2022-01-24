import readlineSync from 'readline-sync';

import { greeting } from './cli.js';

const rounds = 3;

const launchGame = (rulesOfTheGame, generateRound) => {
  const userName = greeting();
  console.log(rulesOfTheGame);
  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = generateRound();
    const questionToUser = `Question: ${question} `;
    console.log(questionToUser);
    const userResponse = readlineSync.question('Your answer: ');
    if (userResponse === answer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`${userResponse} is wrong answer ;(. Correct answer was ${answer}.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
