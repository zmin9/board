module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:import/recommended"
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  root: true,
  "rules": {
    "semi": "off",
    "@typescript-eslint/semi": "error",
    "react/react-in-jsx-scope": "off",
    "react/display-name": 'off',
    "import/named": "off"
  }
};
