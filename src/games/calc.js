import playGame from '../index.js';
import getRandom from '../random.js';

const descriptionGame = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (number1, operator, number2) => {
  let correctAnswer = 0;
  switch (operator) {
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
      console.log('Error');
  }
  return correctAnswer;
};

const getRound = () => {
  const number1 = getRandom(1, 25);
  const number2 = getRandom(1, 25);
  const randomOperator = operators[getRandom(0, operators.length - 1)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const expectedAnswer = calculate(number1, randomOperator, number2).toString();

  return [question, expectedAnswer];
};

const calc = () => playGame(descriptionGame, getRound);

export default calc;
