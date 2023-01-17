import playGame from '../index.js';
import getRandom from '../random.js';

const descriptionGame = 'What number is missing in the progression?';

const getProgression = () => {
  const progression = [];
  const startProgression = getRandom(1, 100);
  const stepProgression = getRandom(1, 5);
  const lengthProgression = 10;

  for (let i = 0; i < stepProgression * lengthProgression; i += stepProgression) {
    progression.push(startProgression + i);
  }
  return progression;
};

const getRound = () => {
  const rawProgression = getProgression();
  const hiddenIndex = getRandom(1, 9);
  const newProgression = rawProgression[hiddenIndex];
  const result = newProgression;
  rawProgression[hiddenIndex] = '..';

  return [rawProgression.join(' ').toString(), result.toString()];
};

const startProgressionGame = () => playGame(descriptionGame, getRound);

export default startProgressionGame;
