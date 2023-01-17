import playGame from '../index.js';
import getRandom from '../random.js';

const descriptionGame = 'What is the result of the expression?';

const calc = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandom(1, 25);
  const number2 = getRandom(1, 25);
  const randomOperators = operators[getRandom(0, operators.length - 1)];
  const question = `${number1} ${randomOperators} ${number2}`;

  let correctAnswer = 0;
  switch (randomOperators) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      correctAnswer = null;
  }

  correctAnswer = correctAnswer.toString();
  return [question, correctAnswer];
};

playGame(descriptionGame, calc);

export default calc;
