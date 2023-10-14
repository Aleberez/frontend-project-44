#!/usr/bin/env node
import getGameCommonPart from '../../src/index.js';

const uniqeGameText = 'What number is missing in the progression?';

const getRandomNumber = (max, min) => Math.floor(Math.random() * (max - min)) + min;

const getQuestion = () => {
  const progressionNumber = getRandomNumber(10, 1);
  let startValueNumber = getRandomNumber(1000, 1);
  let counter = 0;
  const maxNumberOfValues = 10;
  const resultArr = [];
  while (counter < maxNumberOfValues) {
    resultArr.push(startValueNumber);
    startValueNumber += progressionNumber;
    counter += 1;
  }
  const answerNumber = resultArr[progressionNumber - 1];
  resultArr[progressionNumber - 1] = '..';
  const ourQuestion = resultArr.join(' ');
  return [ourQuestion, String(answerNumber)];
};

const getQuestionAnswer = (questionArr) => questionArr[1];

getGameCommonPart(getQuestionAnswer, getQuestion, uniqeGameText);
