import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    { ignores: ['dist'] },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        settings: { react: { version: '18.3' } },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'no-useless-catch': 'warn',
            'no-redeclare': 'warn',
            'no-undef': 'warn',
            'no-unused-vars': 'warn',
            'no-useless-escape': 'warn',
            'react/no-unknown-property': 'warn',
            'react/display-name': 'warn',
            'react/prop-types': 'off',
            'react/no-unescaped-entities': 'warn',
            'react/jsx-key': 'warn',
            'no-const-assign': 'warn',
            'no-dupe-keys': 'warn',
            'no-async-promise-executor': 'warn',
            'no-prototype-builtins': 'warn',
            'react/no-children-prop': 'warn',
        },
    },
    eslintConfigPrettier,
];
