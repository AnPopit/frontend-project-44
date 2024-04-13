import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isEvenNumber = (randomNumber) => (((randomNumber % 2) === 0));

const getCorrectAnswer = (randomNumber) => (isEvenNumber(randomNumber) ? 'yes' : 'no');

const getCondition = () => {
  const maxRange = 100;
  const randomNumber = getRandomNumber(maxRange);
  const question = String(randomNumber);
  const result = getCorrectAnswer(randomNumber);
  return [question, result];
};

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(rule, getCondition);
};
