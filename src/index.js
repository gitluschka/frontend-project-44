import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let round = 0; round < roundsCount; round += 1) {
    const [question, expectedAnswer] = generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== expectedAnswer) {
      console.log(`${userAnswer} is wrong answer;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};
