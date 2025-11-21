import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier/recommended';
import vueConfigTypescript from '@vue/eslint-config-typescript';
import vueConfigPrettier from '@vue/eslint-config-prettier';
import json from '@eslint/json';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ...pluginJs.configs.recommended,
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
  },
  {
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  ...vueConfigTypescript(),
  vueConfigPrettier,
  {
    rules: {
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/no-v-html': 'off',
      'vue/v-on-event-hyphenation': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: ['node_modules', '.nuxt', '.output', 'dist'],
  },
  prettier,
  {
    rules: {
      'prettier/prettier': ['warn', { singleQuote: true }],
    },
  },
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["**/*.jsonc"], plugins: { json }, language: "json/jsonc", extends: ["json/recommended"] },
]);

