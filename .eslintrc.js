module.exports = {
  parser: 'babel-eslint', // Specifies the ESLint parser
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    allowImportExportEverywhere: false,
  },
  env: {
    mocha: true,
  },
  rules: {
    'arrow-parens': ['error', 'as-needed', {
        'requireForBlockBody': false
      }],
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
    strict: 2,
  },
};

// {
//   "parser": "babel-eslint",
//   "extends": "airbnb-base",
//   "parserOptions": {
//     "sourceType": "module",
//     "allowImportExportEverywhere": false
//   },
//   "env": {
//     "mocha": true
//   },
//   "parserOptions": {
//     "sourceType": "module"
//   },
//   "rules": {
//     "no-underscore-dangle": 0,
//     "class-methods-use-this": ["off"],
//     "no-use-before-define": ["error", { 
//       "functions": false, 
//       "classes": false 
//     }],
//     "node/no-unpublished-import": ["off"],
//     "arrow-parens": ["error", "as-needed", {
//       "requireForBlockBody": false
//     }]
//   }
// }
