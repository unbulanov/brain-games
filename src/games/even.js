import readlineSync from 'readline-sync';

const randomNum = () => {
  const number = (Math.round(Math.random() * 100));
  return number;
};

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const saveNum = randomNum();
    console.log(`Question: ${saveNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((saveNum % 2 === 0 && userAnswer === 'yes') || (saveNum % 2 !== 0 && userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
