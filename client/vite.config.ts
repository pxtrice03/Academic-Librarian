import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
      '@components': path.join(__dirname, './src/components'),
      '@routes': path.join(__dirname, './src/routes'),
      '@pages': path.join(__dirname, './src/pages'),
      '@config': path.join(__dirname, './src/config'),
      '@hooks': path.join(__dirname, './src/hooks'),
      '@types': path.join(__dirname, './src/types'),
      '@utils': path.join(__dirname, './src/utils'),
      '@services': path.join(__dirname, './src/services')
    }
  }
})
