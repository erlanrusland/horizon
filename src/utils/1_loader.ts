// src/utils/loader.ts
const files = import.meta.glob('../catatan/**/*.{md,txt,html}', { query: '?raw', eager: true });

export interface Note {
  id: string;
  folder: string;
  fileName: string;
  content: string;
}

export const getCatatanGrouped = () => {
  const grouped: Record<string, Note[]> = {};

  try {
    Object.keys(files).forEach((path) => {
      const parts = path.split('/');
      const folder = parts[parts.length - 2] || 'Uncategorized';
      const fileName = parts[parts.length - 1];
      
      // Ambil konten: coba ambil .default (Vite raw), jika tidak ada ambil langsung
      const fileModule = files[path] as any;
      const content = fileModule.default || fileModule || "";

      if (!grouped[folder]) grouped[folder] = [];
      
      grouped[folder].push({
        id: path,
        folder,
        fileName,
        content
      });
    });
  } catch (error) {
    console.error("Error loading files:", error);
  }

  return grouped;
};