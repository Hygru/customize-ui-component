const path = require("path")

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: path.resolve(__dirname, "./tsconfig.json"),
        tsconfigRootDir: __dirname,
        ecmaVersion: 2019,
        sourceType: "module",
        // ecmaFeatures: {
        //     jsx: true,
        //     experimentalObjectRestSpread: true
        // }
    },
    extends: [
        // 使用推荐的React代码检测规范
        "plugin:@typescript-eslint/recommended"
    ],
    plugins: ["@typescript-eslint", "react", "react-hooks"],
    env: {
        // 你的环境变量（包含多个预定义的全局变量）
        browser: true,
        node: true
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    },
    rules: {
        // 自定义你的规则
    }
}
