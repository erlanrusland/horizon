export interface Note {
  id: string;
  fileName: string;
  content: string;
  extension: 'md' | 'html' | 'txt';
  lastModified: string; 
}

export interface FolderNode {
  name: string;
  files: Note[];
  subFolders: Record<string, FolderNode>;
}

export const getCatatanTree = (): FolderNode => {
  /**
   * REFACTOR UTAMA:
   * Hapus `query: '?raw'` dan `import: 'default'`.
   * Kita butuh seluruh objek modul karena plugin menyuntikkan 
   * 'lastModified' sebagai export bernama.
   */
  const modules = import.meta.glob('/src/catatan/**/*.{md,txt,html}', { 
    eager: true 
  });

  const root: FolderNode = { name: 'root', files: [], subFolders: {} };

  Object.entries(modules).forEach(([path, moduleData]) => {
    // Karena tidak pakai ?raw, data modul ada di dalam objek moduleData
    const mod = moduleData as { default: string; lastModified?: string };
    
    const parts = path.split('/');
    const catatanIndex = parts.indexOf('catatan');
    const pathParts = parts.slice(catatanIndex + 1);
    
    let currentNode = root;
    
    pathParts.forEach((part, index) => {
      const isFile = index === pathParts.length - 1;

      if (isFile) {
        const extension = part.split('.').pop()?.toLowerCase() as Note['extension'];
        
        currentNode.files.push({
          id: path,
          fileName: part,
          // Isi teks file sekarang ada di mod.default
          content: mod.default || '', 
          extension: extension || 'md',
          /**
           * MENGAMBIL TANGGAL ASLI:
           * Jika plugin berhasil, mod.lastModified akan berisi tanggal 18.
           * Jika gagal/file baru, kita beri fallback tanggal hari ini.
           */
          lastModified: mod.lastModified || new Date().toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })
        });
      } else {
        if (!currentNode.subFolders[part]) {
          currentNode.subFolders[part] = { name: part, files: [], subFolders: {} };
        }
        currentNode = currentNode.subFolders[part];
      }
    });
  });

  return root;
};