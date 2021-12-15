import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['esm', 'cjs'],
  entry: ['src/index.ts', 'src/register.ts'],
  platform: 'node',
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
})
