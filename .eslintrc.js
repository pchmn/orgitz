module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': ['error']
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    },
    {
      files: 'packages/web/**',
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: ['@app/modules/*/*', '@lib/*/*', '@app/shared/*/*', '@app/core/*/*']
          }
        ]
      }
    }
  ]
};
