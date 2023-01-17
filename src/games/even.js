import playGame from '../index.js';
import getRandom from '../random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2) === 0;

const getRound = () => {
  const num = getRandom(1, 100);
  const question = num;
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

const startGameEven = () => playGame(description, getRound);

export default startGameEven;
