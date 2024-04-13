import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getProgression = () => {
  const maxRange = 10;
  const minRangeIndex = 5;
  const start = getRandomNumber(maxRange);
  const step = getRandomNumber(maxRange);
  const length = getRandomNumber(maxRange, minRangeIndex);
  const progression = [];
  const hiddenIndex = getRandomNumber(length);

  for (let i = 0; i <= length; i += 1) {
    progression.push(start + (step * i));
  }

  const result = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  
  return [progression.join(' '), String(result)];
};

export default () => {
  const rule = 'What number is missing in the progression?';
  startGame(rule, getProgression);
};
