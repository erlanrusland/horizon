import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  // Gunakan nama repo jika dideploy ke username.github.io/horizon/
  base: '/horizon/', 
  plugins: [
    react(),
    {
      name: 'file-stats-extractor',
      // Gunakan 'load' alih-alih 'transform' agar kita membaca file mentah 
      // sebelum diproses oleh plugin lain.
      load(id) {
        if (id.includes('/src/catatan/') && /\.(md|txt|html)$/.test(id)) {
          const stats = fs.statSync(id);
          const rawContent = fs.readFileSync(id, 'utf-8');
          const date = stats.mtime.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          });

          // Inject metadata lastModified dan konten sebagai default export
          return `
            export const lastModified = "${date}";
            export default ${JSON.stringify(rawContent)};
          `;
        }
      }
    }
  ],
  optimizeDeps: {
    exclude: ['@tailwindcss/oxide', 'lightningcss']
  },
  build: {
    rollupOptions: {
      external: ['@tailwindcss/oxide', 'lightningcss']
    }
  }
});