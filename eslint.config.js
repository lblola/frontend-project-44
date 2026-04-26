import js from '@eslint/js'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default [
  js.configs.recommended,
  stylistic.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
]
