import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Aman untuk GitHub Pages nanti
  optimizeDeps: {
    // Paksa Vite mengabaikan library bermasalah ini saat optimasi
    exclude: ['@tailwindcss/oxide', 'lightningcss']
  },
  build: {
    rollupOptions: {
      external: ['@tailwindcss/oxide', 'lightningcss']
    }
  }
})