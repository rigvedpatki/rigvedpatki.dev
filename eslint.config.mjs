// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.angular/**',
      '**/*.d.ts',
      '*.log',
      '.env*',
      'coverage/**',
      '*.tsbuildinfo',
    ],
  },
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    plugins: {
      import: importPlugin,
    },
    processor: angular.processInlineTemplates,
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'rig',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'rig',
          style: 'kebab-case',
        },
      ],
      // Additional rules for better code quality
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      // Disabled because we're using zoneless Angular - OnPush not needed
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
      // Import ordering and organization rules
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
        },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js built-in modules
            'external', // External libraries
            'internal', // Internal modules
            ['parent', 'sibling'], // Relative imports
            'index', // Index imports
            'type', // Type imports
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'off', // Turned off as TypeScript handles this
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {},
  }
);
