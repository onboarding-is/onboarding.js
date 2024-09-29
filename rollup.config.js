import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const config = {
  input: 'src/onboarding.ts',
  output: [
    {
      file: pkg.main,
      name: 'onboarding.js',
      format: 'umd',
      sourcemap: true
    },
    { file: pkg.module, format: 'es', sourcemap: true },
    {
      file: 'dist/onboarding.snippet.min.js',
      format: 'iife',
      strict: false,
      plugins: [terser()]
    }
  ],
  plugins: [typescript({ useTsconfigDeclarationDir: true })],
};

export default config;
