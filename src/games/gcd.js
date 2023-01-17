import playGame from '../index.js';
import getRandom from '../random.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  const question = `${number1} ${number2}`;

  const gcdNumber = (a, b) => {
    if (a % b === 0) {
      return b;
    }
    return gcdNumber(b, a % b);
  };

  const result = gcdNumber(number1, number2).toString();

  return [question, result];
};

playGame(descriptionGame, gcd);

export default gcd;
