import readlineSync from 'readline-sync';

const roundsCount = 3;

const isEven = (number) => number % 2 === 0;

const getRandomNumber = () => Math.floor(Math.random() * 100);

export default function runEvenGame() {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}