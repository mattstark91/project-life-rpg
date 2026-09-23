import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Configurazione Vite: alias "@" -> src per import puliti in tutto il progetto
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
  },
})
