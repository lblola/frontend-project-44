import runGame from '../index.js'
import getRandomNumber from '../utils.js'

const description = 'What number is missing in the progression?'

const progressionLength = 10

const makeProgression = (start, step, length) => {
  const progression = []

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }

  return progression
}

const generateRound = () => {
  const start = getRandomNumber(1, 20)
  const step = getRandomNumber(1, 10)
  const hiddenIndex = getRandomNumber(0, progressionLength - 1)

  const progression = makeProgression(start, step, progressionLength)
  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'

  const question = progression.join(' ')

  return [question, correctAnswer]
}

export default function runProgressionGame() {
  runGame(description, generateRound)
}