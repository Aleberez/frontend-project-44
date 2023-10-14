#!/usr/bin/env node
import getGameCommonPart from '../../src/index.js';

const uniqeGameText = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = () => Math.floor(Math.random() * (100 - 1)) + 1;

const getQuestion = () => [getRandomNumber()];

const getQuestionAnswer = (questionNumber) => {
  if (questionNumber[0] % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

getGameCommonPart(getQuestionAnswer, getQuestion, uniqeGameText);
