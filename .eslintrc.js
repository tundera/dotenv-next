module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
    extraFileExtensions: ['.mjs', '.cjs'],
  },
  env: {
    node: true,
    es2021: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/test/**', '**/__tests__/**'],
      env: {
        'jest/globals': true,
      },
      parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['tsconfig.test.json'],
        extraFileExtensions: ['.mjs', '.cjs'],
      },
      extends: ['plugin:jest/recommended', 'plugin:prettier/recommended'],
    },
  ],
}
