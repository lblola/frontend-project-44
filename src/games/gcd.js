import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getGcd = (number1, number2) => {
  let a = number1;
  let b = number2;

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

const generateRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));

  return [question, correctAnswer];
};

export default function runGcdGame() {
  runGame(description, generateRound);
}