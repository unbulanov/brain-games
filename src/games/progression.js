import gameEngine from '../index.js';
import getRandom from '../random.js';

const descriptionGame = 'What number is missing in the progression?';

const progression = () => {
  const newArray = [];
  const startProgression = getRandom(1, 100);
  const stepProgression = getRandom(1, 5);
  const lengthProgression = 10;

  for (let i = 0; i < stepProgression * lengthProgression; i += stepProgression) {
    newArray.push(startProgression + i);
  }
  const hiddenEl = getRandom(1, 9);
  const newArray2 = newArray[hiddenEl];
  const result = newArray2;
  newArray[hiddenEl] = '..';

  return [newArray.join(' ').toString(), result.toString()];
};

gameEngine(descriptionGame, progression);

export default progression;
