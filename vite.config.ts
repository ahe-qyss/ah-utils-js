import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.{spec,test}.ts'],
      rollupTypes: true,
      insertTypesEntry: true,
    }),
  ],
  
  esbuild: {
    drop: ['debugger'],
  },
  
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ahUtils',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        const ext = { es: 'js', cjs: 'cjs', umd: 'umd.js' }
        return `index.${ext[format as keyof typeof ext]}`
      },
    },
    
    rollupOptions: {
      external: ['decimal.js'],
      output: {
        globals: { 'decimal.js': 'Decimal' },
        exports: 'named',
      },
    },
    
    minify: 'esbuild',
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/types': resolve(__dirname, 'src/types'),
      '@/utils': resolve(__dirname, 'src/utils'),
    },
  },
})
