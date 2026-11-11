import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // En desarrollo local (npm run dev) /api apunta a la API levantada en el puerto 3000
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
