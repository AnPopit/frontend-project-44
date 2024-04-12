import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getCorrectAnswer = (randomNumber, randomNumber2) => {
  let a = randomNumber;
  let b = randomNumber2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const getCondition = () => {
  const maxRange = 100;
  const randomNumber = getRandomNumber(maxRange);
  const randomNumber2 = getRandomNumber(maxRange);
  const result = getCorrectAnswer(randomNumber, randomNumber2);
  const question = (`${randomNumber} ${randomNumber2}`);
  return [question, String(result)];
};

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';

  startGame(rule, getCondition);
};
