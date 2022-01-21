/* eslint-disable max-len */
import readlineSync from 'readline-sync';

export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomIndex = (array) => array[getRandomInt(0, array.length - 1)];
