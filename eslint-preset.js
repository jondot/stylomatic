module.exports = {
  extends: [
    '@antfu/eslint-config-react',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // 'arrow-parens': ["error", "always"],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
      },
    ],
  },
}
