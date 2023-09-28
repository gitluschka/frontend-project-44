import run from '../index.js';
import { getRandomNumber } from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 100;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(minRange, maxRange);
  const expectedAnswer = isEven(number) ? 'yes' : 'no';
  const question = String(number);

  return [question, expectedAnswer];
};

export default () => {
  run(description, generateRound);
};
