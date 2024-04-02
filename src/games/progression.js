import { startGame } from '../index.js';

const getCorrectAnswer = (randomNumber, delta, randomIndex) => {
  let result = 0;
  let nextNumber = randomNumber;
  for (let i = 0; i <= 10; i += 1) {
    if (i === randomIndex) {
      result = nextNumber;
      nextNumber += delta;
    }
    nextNumber += delta;
  }
  return result;
};

const getCondition = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  const delta = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  const randomCount = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const randomIndex = Math.floor(Math.random() * (randomCount - 0 + 1)) + 0;
  const result = getCorrectAnswer(randomNumber, delta, randomIndex);
  let question = '';
  let nextNumber = randomNumber;
  for (let i = 0; i <= randomCount; i += 1) {
    if (i === randomIndex) {
      question = (`${question} ..`);
      nextNumber += delta;
    }
    question = (`${question} ${nextNumber}`);
    nextNumber += delta;
  }
  return [question, String(result)];
};

export default () => {
  const rule = 'What number is missing in the progression?';

  startGame(rule, getCondition);
};
