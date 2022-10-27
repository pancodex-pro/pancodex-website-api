import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
// @ts-ignore
import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'es',
        },
    ],
    external: [
        'react',
        'react-dom'
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            useTsconfigDeclarationDir: true,
        }),
    ],
};