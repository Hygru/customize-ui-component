import typescript from 'rollup-plugin-typescript2'

export default {
    input: 'src/index.ts',
    output: {
        file: 'lib/boundle.js',
        format: 'esm',
    },
    plugins: [
        typescript(),
    ],
}
