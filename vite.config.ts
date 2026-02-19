import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'file-stats-extractor',
      transform(code, id) {
        // Target file md, txt, dan html di folder catatan
        if (id.includes('/src/catatan/') && /\.(md|txt|html)$/.test(id)) {
          const stats = fs.statSync(id);
          const date = stats.mtime.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          });

          // Kita bungkus konten aslinya menjadi string aman agar tidak error di HTML/MD
          // Gunakan JSON.stringify untuk memastikan karakter aneh tidak merusak JS
          return {
            code: `export const lastModified = "${date}";
                   export default ${JSON.stringify(code)};`,
            map: null
          };
        }
      }
    }
  ]
});