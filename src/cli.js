import readlineSync from 'readline-sync';

export default () => {
  return readlineSync.question('May I have your name? ');
};