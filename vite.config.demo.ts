import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// デモアプリ用のVite設定
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-demo',
  },
})
