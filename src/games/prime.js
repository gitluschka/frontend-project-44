import run from '../index.js';
import { getRandomNumber } from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = 1;
const maxRange = 100;

const numberPrime = (numberThis) => {
  if (numberThis < 2) {
    return false;
  }
  for (let i = 2; i < numberThis; i += 1) {
    if (numberThis % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const findNumber = getRandomNumber(minRange, maxRange);
  const question = String(findNumber);
  const expectedAnswer = numberPrime(findNumber) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

export default () => {
  run(description, generateRound);
};
