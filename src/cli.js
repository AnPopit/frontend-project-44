import readlineSync from 'readline-sync';

const NameUser = () => {
    const Name = readlineSync.question('May I have your name? ');
    return Name;
  };
  
  export default NameUser;