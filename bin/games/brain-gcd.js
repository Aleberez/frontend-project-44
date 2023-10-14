#!/usr/bin/env node
import getGameCommonPart from '../../src/index.js';

const uniqeGameText = 'Find the greatest common divisor of given numbers.';

const getRandomInteger = () => {
  const maxNumberRange = 1000;
  return Math.floor(Math.random() * maxNumberRange);
};

const getQuestion = () => {
  const firstRandomNumber = getRandomInteger();
  const secondRandomNumber = getRandomInteger();
  return [`${firstRandomNumber} ${secondRandomNumber}`, firstRandomNumber, secondRandomNumber];
};

const getNOD = (firstNumber, secondNumber) => {
  const r = firstNumber % secondNumber;
  if (firstNumber === 0) {
    return secondNumber;
  } if (secondNumber === 0) {
    return firstNumber;
  }
  const result = getNOD(secondNumber, r);
  return result;
};

const getQuestionAnswer = (numbersArr) => {
  const firstNumber = numbersArr[1];
  const secondNumber = numbersArr[2];
  const nod = getNOD(firstNumber, secondNumber);
  return String(nod);
};

getGameCommonPart(getQuestionAnswer, getQuestion, uniqeGameText);
