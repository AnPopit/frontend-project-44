import startGame from '../index.js';

const getCorrectAnswer = (randomNumber) => {
  let result = '';
  if ((randomNumber % 2) === 0) {
    result = 'yes';
  } else if ((randomNumber % 2) !== 0) {
    result = 'no';
  }
  return result;
};

const getCondition = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const question = randomNumber;
  const result = getCorrectAnswer(randomNumber);
  return [question, result];
};

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(rule, getCondition);
};
