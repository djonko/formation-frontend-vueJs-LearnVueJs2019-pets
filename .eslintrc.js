module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'plugin:prettier/recommended',
    //  "prettier",
    'eslint:recommended'
  ],
  plugins: [
    //   "prettier"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'none', semi: false }, 
    {'usePrettierrc': true}
  ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
