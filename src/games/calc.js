import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getCorrectAnswer = (symbol, randomNumber, randomNumber2) => {
  switch (symbol) {
    case '+': return randomNumber + randomNumber2;
    case '-': return randomNumber - randomNumber2;
    case '*': return randomNumber * randomNumber2;
    default: return 'Error';
  }
};

const getCondition = () => {
  const oper = ['+', '-', '*'];
  const maxRange = 100;
  const maxRangeIndex = oper.length - 1;
  const randomNumber = getRandomNumber(maxRange);
  const randomNumber2 = getRandomNumber(maxRange);
  const randomIndex = getRandomNumber(maxRangeIndex);
  const result = getCorrectAnswer(oper[randomIndex], randomNumber, randomNumber2);
  const question = (`${randomNumber} ${oper[randomIndex]} ${randomNumber2}`);
  return [question, String(result)];
};

export default () => {
  const rule = 'What is the result of the expression?';

  startGame(rule, getCondition);
};
