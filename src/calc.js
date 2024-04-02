import { startGame } from './index.js';

const getCorrectAnswer = (symbol, randomNumber, randomNumber2) => {
  let result = 0;
  if (symbol === '+') {
    result = randomNumber + randomNumber2;
  } else if (symbol === '-') {
    result = randomNumber - randomNumber2;
  } else if (symbol === '*') {
    result = randomNumber * randomNumber2;
  }
  return result;
};

const getCondition = () => {
  const oper = ['+', '-', '*'];
  const randomNumber = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);
  const randomIndex = Math.floor(Math.random() * (oper.length - 1));
  const result = getCorrectAnswer(oper[randomIndex], randomNumber, randomNumber2);
  const question = (`${randomNumber} ${oper[randomIndex]} ${randomNumber2}`);
  return [question, String(result)];
};

export default () => {
  const rule = 'What is the result of the expression?';

  startGame(rule, getCondition);
};
