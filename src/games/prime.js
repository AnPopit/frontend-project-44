import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isPrimeNumber = (randomNumber) => {
  let result = true;
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      result = false;
    }
  }
  if (randomNumber <= 1) {
    result = false;
  }
  return result;
};

const getCorrectAnswer = (randomNumber) => (isPrimeNumber(randomNumber) ? 'yes' : 'no');

const getCondition = () => {
  const maxRange = 100;
  const randomNumber = getRandomNumber(maxRange);
  const result = getCorrectAnswer(randomNumber);
  const question = randomNumber;
  return [question, String(result)];
};

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  startGame(rule, getCondition);
};
