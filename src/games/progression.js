import startGame from '../index.js';

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
  const maxRange = 10;
  const minRange = 0;
  const minRangeIndex = 5;
  const randomNumber = Math.floor(Math.random() * maxRange);
  const delta = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  const randomCount = Math.floor(Math.random() * (maxRange - minRangeIndex + 1)) + minRangeIndex;
  const randomIndex = Math.floor(Math.random() * (randomCount - minRange + 1)) + minRange;
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
