import playGame from '../index.js';
import getRandom from '../random.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (a % b === 0) {
    return b;
  }
  return findGcd(b, a % b);
};

const getRound = () => {
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  const question = `${number1} ${number2}`;
  const result = findGcd(number1, number2).toString();

  return [question, result];
};

const startGameGcd = () => playGame(descriptionGame, getRound);

export default startGameGcd;
