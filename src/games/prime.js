import runGame from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

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
  const number = getRandomNumber()
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return [number, correctAnswer]
}

export default function runPrimeGame() {
  runGame(description, generateRound)
}
