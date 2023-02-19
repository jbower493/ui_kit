import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default [
    {
        input: 'src/index.ts',
        output: {
            file: 'build/index.js',
            format: 'esm'
        },
        plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' })],
        external: ['react', 'react-dom']
    },
    {
        input: 'build/index.d.ts',
        output: [{ file: 'build/index.d.ts', format: 'esm' }],
        plugins: [dts()]
    }
]
