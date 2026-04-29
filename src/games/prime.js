import runGame from '../index.js'
import getRandomNumber from '../utils.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return [number, correctAnswer]
}

export default function runPrimeGame() {
  runGame(description, generateRound)
}