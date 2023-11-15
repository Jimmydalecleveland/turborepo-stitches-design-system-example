import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import { defineConfig } from 'rollup'

const config = defineConfig({
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
  ],
  external: [
    'react',
    'react/jsx-runtime',
    'react/jsx-dev-runtime',
    'react-is',
    '@stitches/react',
  ],
  plugins: [del({ targets: 'dist/*' }), typescript()],
})

export default config

