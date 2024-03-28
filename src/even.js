import readlineSync from 'readline-sync';

export default () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`)
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let i = 0; 
    while (i < 3) {
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (((randomNumber % 2) === 0) && (userAnswer === 'yes') || (((randomNumber % 2) !== 0) && (userAnswer === 'no'))) {
        console.log('Correct!');
        i += 1;
    } else {
        console.log(`Let's try again, ${userName}!`);
        return;
    }
    }
    console.log(`Congratulations, ${userName}!`);
    return;
};
