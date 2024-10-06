module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', 'prettier', 'plugin:storybook/recommended'],
    plugins: ['vue'],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        quotes: [2, 'single'],
        '@typescript-eslint/quotes': [
            'warn',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'lines-between-class-members': ['warn', 'always'],
        'arrow-body-style': ['warn', 'as-needed'],
        'no-unneeded-ternary': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-prototype-builtins': 'warn',
        'getter-return': 'off',
        'no-undef': 'off',
        'no-control-regex': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: true,
            },
        ],
        'sort-vars': 'off',
        'one-var': 'off',
        'no-eval': 'warn',
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 1,
                },
                multiline: {
                    max: 1,
                },
            },
        ],
        'vue/first-attribute-linebreak': [
            'error',
            {
                singleline: 'ignore',
                multiline: 'below',
            },
        ],
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true,
            },
        ],
        'no-fallthrough': 'off',
        'linebreak-style': 0,
        semi: ['error', 'always'],
        'space-before-function-paren': [
            'error',
            {
                named: 'never',
                anonymous: 'always',
                asyncArrow: 'always',
            },
        ],
        'no-unreachable': 'error',
        'space-in-parens': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        curly: 'error',
        'keyword-spacing': 'error',
        'vue/no-mutating-props': 'warn',
        'vue/component-definition-name-casing': 'off',
        'vue/no-unused-components': 'warn',
        'vue/require-prop-types': 'error',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
