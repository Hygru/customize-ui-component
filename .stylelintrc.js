module.exports = {
    extends: ["stylelint-config-standard"],
    rules: {
        // 自定义规则
        indentation: 4,
    },
    ignoreFiles: ["node_modules/**/*", "lib/**/*", "**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"]
}
