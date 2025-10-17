/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'angular',
      },
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.scss',
      options: {
        parser: 'scss',
      },
    },
  ],
};
