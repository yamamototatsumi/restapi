module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off', // console.log();OK
    'no-unused-vars': 'off', // 使っていない変数あってもOK
    // ↓空白行に対してwarnのみ出るようにする。
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    // 'lodash/prefer-lodash-method': [2, { ignoreObjects: ['_'] }],
    'no-empty-function': 'off'
    // 空のfunctioｎあっても大丈夫}
  }
}
