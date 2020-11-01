module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  plugins: ['jest', 'prettier', 'react-hooks', 'sonarjs', 'no-secrets'],
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'prettier/react',
    'prettier/standard',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
  },
  globals: {
    JestMockFn: true,
    $Keys: true,
    $Values: true,
    $PropertyType: true,
    Event: true,
    SyntheticInputEvent: true,
    HTMLInputElement: true,
    graphql: true,
  },
  rules: {
    'sonarjs/no-duplicate-string': ['error', 5],
    'sonarjs/cognitive-complexity': ['error', 13],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-secrets/no-secrets': 'error',
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/prop-types': 'warn',
  },
};
