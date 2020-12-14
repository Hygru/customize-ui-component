import clear from 'rollup-plugin-clear'
import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

const extensions = ['js', 'ts']

export default {
    input: 'src/index.ts',
    output: {
        file: 'lib/bundle.js',
        format: 'esm',
    },
    plugins: [
        clear({
            targets: ['lib'],
        }),
        resolve({
            extensions,
        }),
        commonjs(),
        typescript(),
        postcss({
            plugins: [autoprefixer, cssnano],
            extract: 'css/bundle.css' // 输出路径
        }),
        babel({
            exclude: 'node_modules/**',   // 防止打包node_modules下的文件
            runtimeHelpers: true,   // 使plugin-transform-runtime生效
            extensions,
        }),
        terser()
    ],
    external: ['react', 'react-dom'],
}
