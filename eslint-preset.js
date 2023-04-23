module.exports = {
  extends: [
    '@antfu/eslint-config-react',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'antfu/top-level-function': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
}
