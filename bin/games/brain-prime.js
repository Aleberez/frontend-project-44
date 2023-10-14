#!/usr/bin/env node
import getGameCommonPart from '../../src/index.js';

const uniqeGameText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNumber = (max, min) => Math.floor(Math.random() * (max - min)) + min;

const getQuestion = () => {
  const randomNumber = getRandomNumber(1000, 2);
  return [randomNumber];
};

const isPrime = (number) => {
  if (number === 2) {
    return 'yes';
  }
  let i = 2;
  const limit = Math.sqrt(number);
  while (i <= limit) {
    if (number % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const getQuestionAnswer = (questionArr) => {
  const answer = isPrime(questionArr[0]);
  return answer;
};

getGameCommonPart(getQuestionAnswer, getQuestion, uniqeGameText);
