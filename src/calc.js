import readlineSync from 'readline-sync';

export default () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`)
    console.log('Answer "yes" if thea number is even, otherwise answer "no".');
    let i = 0; 
    const oper = ['+', '-', '*'];
    while (i < 3) {

    let randomNumber = Math.floor(Math.random() * 100);
    let randomNumber2 = Math.floor(Math.random() * 100);
    let randomIndex = Math.floor(Math.random() * (oper.length - 1));
    let result = 0;

    if (oper[randomIndex] === '+') {
        result = randomNumber + randomNumber2;
    } else if (oper[randomIndex] === '-') {
        result = randomNumber - randomNumber2;
    } else if (oper[randomIndex] === '*') {
        result = randomNumber * randomNumber2;
    } 

    console.log(`Question: ${randomNumber}${oper[randomIndex]}${randomNumber2}`);
    

    const userAnswer = readlineSync.question('Your answer: ');
    if (result === Number(userAnswer)) {
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