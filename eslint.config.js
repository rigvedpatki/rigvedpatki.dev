import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginSolid from 'eslint-plugin-solid/configs/typescript';

export default [
  // Base JS recommendations
  js.configs.recommended,
  // TypeScript recommendations
  ...tseslint.configs.recommended,
  // Astro recommendations
  ...eslintPluginAstro.configs.recommended,
  // Solid.js recommendations
  eslintPluginSolid,
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,astro}'],
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      // General JavaScript rules
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',

      // Import/Export rules
      'no-duplicate-imports': 'error',

      // Style rules that work well with Prettier
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'never']
    }
  },
  {
    // Override for Astro files
    files: ['**/*.astro'],
    rules: {
      // Astro components can have unused props from the frontmatter
      '@typescript-eslint/no-unused-vars': 'off',
      // Astro and Prettier preserve explicit closing tags for native SVG elements
      'solid/self-closing-comp': 'off'
    }
  },
  {
    // Override for config files
    files: ['**/*.config.{js,mjs,cjs,ts}'],
    rules: {
      'no-console': 'off'
    }
  },
  {
    // Ignore patterns
    ignores: [
      // Dependencies
      'node_modules/**',

      // Build outputs
      'dist/**',
      '.astro/**',

      // Public assets
      'public/**',

      // IDE files
      '.vscode/**',
      '.cursor/**',

      // Logs
      '*.log',

      // Environment files
      '.env',
      '.env.local',
      '.env.production',

      // Lock files
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock',

      // Binary files
      '**/*.pdf',
      '**/*.png',
      '**/*.jpg',
      '**/*.jpeg',
      '**/*.gif',
      '**/*.svg',
      '**/*.webp',
      '**/*.ico',

      // Generated TypeScript declaration files
      '**/*.d.ts'
    ]
  }
];
