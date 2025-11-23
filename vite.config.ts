import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(), // CSSをJavaScriptに自動注入
  ],
  build: {
    emptyOutDir: false, // tscで生成した型定義を保持
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'AbcEditor',
      formats: ['es', 'cjs'],
      fileName: (format) => `abc-editor.${format}.js`,
    },
    rollupOptions: {
      // React, React-DOM, abcjsを外部依存として扱う
      external: ['react', 'react-dom', 'react/jsx-runtime', 'abcjs'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          abcjs: 'ABCJS',
        },
      },
    },
  },
})
