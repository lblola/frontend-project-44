import runGame from '../index.js'
import getRandomNumber from '../utils.js'

const description = 'What is the result of the expression?'

const operations = ['+', '-', '*']

const getRandomOperation = () => {
  const randomIndex = getRandomNumber(0, operations.length - 1)

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
  const number1 = getRandomNumber(1, 100)
  const number2 = getRandomNumber(1, 100)
  const operation = getRandomOperation()

  const question = `${number1} ${operation} ${number2}`
  const correctAnswer = String(calculate(number1, number2, operation))

  return [question, correctAnswer]
}

export default function runCalcGame() {
  runGame(description, generateRound)
}