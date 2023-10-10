#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = getUserName();

console.log(`Hello, ${userName}!
Answer "yes" if the number is even, otherwise answer "no".`);

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

let userScoreCount = 0;

do {
  const randomNumber = getRandomNumber(1, 100);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = getAnswer();
  // eslint-disable-next-line no-mixed-operators
  if (randomNumber % 2 === 0 && userAnswer === 'yes' || randomNumber % 2 !== 0 && userAnswer === 'no') {
    console.log('Correct!');
    userScoreCount += 1;
  } else {
    if (userAnswer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${userName}!`);
    } else {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${userName}!`);
    }
    break;
  }
} while (userScoreCount < 3);

if (userScoreCount === 3) {
  console.log(`Congratulations, ${userName}!`);
}
