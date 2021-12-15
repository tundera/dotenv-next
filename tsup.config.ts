import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['esm', 'cjs'],
  entry: ['src/index.ts', 'src/register.ts'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
})
