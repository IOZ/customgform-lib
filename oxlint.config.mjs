import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['typescript', 'react', 'oxc'],
  categories: {
    correctness: 'error',
    suspicious: 'warn',
  },
  env: { browser: true, es2022: true },
  ignorePatterns: ['**/dist/**', '**/*.d.ts'],
});
