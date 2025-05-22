import js from '@eslint/js'

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      // Reglas básicas de JavaScript
      ...js.configs.recommended.rules,

      // Custom: no punto y coma
      semi: ['error', 'never'],

      // Opcionalmente puedes agregar otras reglas estilo Standard
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'quotes': ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'space-before-function-paren': ['error', 'never']
    }
  }
]
