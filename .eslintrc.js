module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // 'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'comma-dangle': ['warn', 'always-multiline'],
    'eol-last': ['error', 'always'],
    indent: ['error', 2, {MemberExpression: 1, SwitchCase: 2}],
    'max-len': ['warn', 140, {ignoreUrls: true, ignoreStrings: true, ignoreComments: true}],
    'newline-per-chained-call': ['error', {ignoreChainWithDepth: 3}],
    'no-console': ['warn', {allow: ['warn', 'error']}],
    'no-extra-boolean-cast': 'warn',
    'no-multiple-empty-lines': [2, {max: 2, maxEOF: 1}],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        ignoreRestSiblings: false,
        args: 'none',
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          consistent: true,
          multiline: true,
        },
        ObjectPattern: {
          consistent: true,
          multiline: true,
        },
        ImportDeclaration: {
          consistent: true,
          multiline: true,
        },
        ExportDeclaration: {
          consistent: true,
          multiline: true,
        },
      },
    ],
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
    'object-shorthand': ['error', 'always'],
    'prefer-const': ['error', {destructuring: 'any', ignoreReadBeforeAssign: false}],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    strict: 2,
  },
};
