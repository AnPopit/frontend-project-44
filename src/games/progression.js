import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getProression = () => {
  const maxRange = 10;
  const minRangeIndex = 5;
  const randomNumber = getRandomNumber(maxRange);
  const delta = getRandomNumber(maxRange);
  const randomCount = getRandomNumber(maxRange, minRangeIndex);
  let nextNumber = randomNumber;
  const progression = [];
  const randomIndex = getRandomNumber(randomCount);
  for (let i = 0; i <= randomCount; i += 1) {
    progression.push(nextNumber);
    nextNumber += delta;
  }
  const result = progression[randomIndex];
  progression[randomIndex] = '..';
  return [progression.join(' '), String(result)];
};

export default () => {
  const rule = 'What number is missing in the progression?';

  startGame(rule, getProression);
};
