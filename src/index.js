import readlineSync from 'readline-sync';

const startGame = (rule, getCondition) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);

  for (let i = 0; i < 3; i += 1) {
    const [question, result] = getCondition(); // 1. Вопрос
    console.log(`Question:${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (result === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
