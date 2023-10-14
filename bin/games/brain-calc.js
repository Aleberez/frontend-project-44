#!/usr/bin/env node
import getGameCommonPart from '../../src/index.js';

const uniqeGameText = 'What is the result of the expression?';

const getRandomOperator = () => {
  const maxRandomNubmer = 3;
  const randomNumber = Math.floor(Math.random() * maxRandomNubmer);
  if (randomNumber === 0) {
    return '+';
  } if (randomNumber === 1) {
    return '-';
  } if (randomNumber === 2) {
    return '*';
  }
  return null;
};

const getRandomInteger = () => {
  const maxNumberRange = 1000;
  return Math.floor(Math.random() * maxNumberRange);
};

const getQuestion = () => {
  const firstRandomNumber = getRandomInteger();
  const secondRandomNumber = getRandomInteger();
  const randomOperator = getRandomOperator();
  return [`${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`, firstRandomNumber, secondRandomNumber, randomOperator];
};

const getQuestionAnswer = (questionData) => {
  const firstNumber = Number(questionData[1]);
  const secondNumber = Number(questionData[2]);
  const operator = questionData[3];
  if (operator === '+') {
    return String(firstNumber + secondNumber);
  } if (operator === '-') {
    return String(firstNumber - secondNumber);
  } if (operator === '*') {
    return String(firstNumber * secondNumber);
  }
  return null;
};

getGameCommonPart(getQuestionAnswer, getQuestion, uniqeGameText);
