import runGame from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const getRandomNumber = () => Math.floor(Math.random() * 100)

const isEven = number => number % 2 === 0

const generateRound = () => {
  const number = getRandomNumber()
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  return [number, correctAnswer]
}

export default function runEvenGame() {
  runGame(description, generateRound)
}
