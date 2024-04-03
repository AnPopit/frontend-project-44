import startGame from '../index.js';

const getCorrectAnswer = (randomNumber, randomNumber2) => {
  let a = randomNumber;
  let b = randomNumber2;
  let result = 0;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  result = randomNumber2 + randomNumber;
  return result;
};

const getCondition = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);
  const result = getCorrectAnswer(randomNumber, randomNumber2);
  const question = (`${randomNumber} ${randomNumber2}`);
  return [question, String(result)];
};

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';

  startGame(rule, getCondition);
};
