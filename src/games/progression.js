import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../helpers.js';

const description = 'What number is missing in the progression?';
const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 10;
const minRange = 1;
const maxRange = 20;

const createProgression = () => {
  const expressionLength = getRandomNumber(minLength, maxLength);
  const difference = getRandomNumber(minStep, maxStep);
  const expressionStart = getRandomNumber(minRange, maxRange);
  const progression = [expressionStart];
  for (let i = 1; i < expressionLength; i += 1) {
    progression[i] = progression[i - 1] + difference;
  }
  return progression;
};

const generateRound = () => {
  const progression = createProgression();
  const emptyPlace = getRandomIndex(progression);
  const number = progression[emptyPlace];
  progression[emptyPlace] = '..';
  const expectedAnswer = String(number);
  const question = progression.join(' ');

  return [question, expectedAnswer];
};

export default () => {
  run(description, generateRound);
};
