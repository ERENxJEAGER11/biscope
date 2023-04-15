module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // Enforce strict mode
    strict: ['error', 'never'],

    // Enforce consistent naming for boolean props
    'react/boolean-prop-naming': [
      'error',
      { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' },
    ],

    // Enforce consistent usage of destructuring assignment of props, state, and context
    'react/destructuring-assignment': ['error', 'always'],

    // Enforce that event handler names are descriptive
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],

    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    // Enforce default props alphabetical sorting
    'react/jsx-sort-default-props': ['error', { ignoreCase: true }],

    // Enforce props alphabetical sorting
    'react/jsx-sort-props': ['error', { ignoreCase: true }],

    // Enforce propTypes declarations alphabetical sorting
    'react/jsx-sort-prop-types': ['error', { ignoreCase: true }],

    // Enforce defaultProps declarations alphabetical sorting
    'react/jsx-sort-default-props': ['error', { ignoreCase: true }],

    // Enforce that props are read-only
    'react/prefer-read-only-props': 'error',

    // Enforce a specific function signature for event handlers (arrow functions)
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
        ignoreRefs: true,
      },
    ],
  },
};
