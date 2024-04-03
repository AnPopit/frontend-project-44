import startGame from '../index.js';

const getCorrectAnswer = (randomNumber) => {
  let result = 'yes';
  if (randomNumber > 1) {
    for (let i = 2; i < randomNumber; i += 1) {
      if (randomNumber % i === 0) {
        result = 'no';
      }
    }
  } else {
    result = 'no';
  }
  return result;
};

const getCondition = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const result = getCorrectAnswer(randomNumber);
  const question = randomNumber;
  return [question, String(result)];
};

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  startGame(rule, getCondition);
};
