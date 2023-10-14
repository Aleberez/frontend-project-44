import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const getGameCommonPart = (getQuestionAnswer, getQuestion, uniqeGameText) => {
  // greetings part
  console.log('Welcome to the Brain Games!');

  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  // uniqe game text
  console.log(uniqeGameText);
  // game part
  let counter = 0;
  const maxGameIteration = 3;
  while (counter < maxGameIteration) {
    const question = getQuestion();
    console.log(`Question: ${question[0]}`);
    const questionAnswer = getQuestionAnswer(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === questionAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${questionAnswer}.
      Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === maxGameIteration) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default getGameCommonPart;
