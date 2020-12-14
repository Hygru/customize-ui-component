module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
    // 使用推荐的React代码检测规范
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import'],
    env: {
    // 你的环境变量（包含多个预定义的全局变量）
        browser: true,
        node: true,
        es6: true,
    },
    globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    },
    parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
    // 自定义你的规则
        'arrow-parens': 'off',
        semi: ['error', 'never'],
        indent: [
            'error',
            4,
            {
                ignoredNodes: ['TemplateLiteral'],
            },
        ],
        'max-len': [
            'error',
            120,
            4,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreTrailingComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                ignoredNodes: ['TemplateLiteral'],
            },
        ],
        'react/require-default-props': ['off'],
    },
}
