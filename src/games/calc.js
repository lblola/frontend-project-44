import runGame from '../index.js'

const description = 'What is the result of the expression?'

const getRandomNumber = () => Math.floor(Math.random() * 100)
const getRandomOperation = () => {
  const operations = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operations.length)

  return operations[randomIndex]
}

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2
    case '-':
      return number1 - number2
    case '*':
      return number1 * number2
    default:
      throw new Error(`Unknown operation: ${operation}`)
  }
}

const generateRound = () => {
  const number1 = getRandomNumber()
  const number2 = getRandomNumber()
  const operation = getRandomOperation()

  const question = `${number1} ${operation} ${number2}`
  const correctAnswer = String(calculate(number1, number2, operation))

  return [question, correctAnswer]
}

export default function runCalcGame() {
  runGame(description, generateRound)
}
