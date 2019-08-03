module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-extend-native": ["error", { exceptions: ["Number"] }],
    quotes: ["Error", "double"]
  }
};
