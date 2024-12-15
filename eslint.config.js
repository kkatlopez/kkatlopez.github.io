import globals from 'globals';
import pluginJs from '@eslint/js';
import { pluginReact, react } from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ignores: '**/node_modules/',
    },
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
    },
    {
        extends: [react, prettier],
    },
    {
        languageOptions: { globals: globals.browser },
    },
    {
        rules: {
            'no-unused-vars': 'warn',
            'prettier/prettier': 'warn',
            'react/no-children-prop': 'warn',
        },
    },
    ...compat.extends('eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'),
];
