export const getCatatanTree = (): FolderNode => {
  // Tanpa ?raw, biarkan plugin kita yang mengurus transformasinya
  const modules = import.meta.glob('/src/catatan/**/*.{md,txt,html}', { 
    eager: true 
  });

  const root: FolderNode = { name: 'root', files: [], subFolders: {} };

  Object.entries(modules).forEach(([path, moduleData]) => {
    const mod = moduleData as { default: string; lastModified: string };
    
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
          content: mod.default, // Konten yang sudah aman disuntik plugin
          extension: extension || 'md',
          lastModified: mod.lastModified // Tanggal asli dari OS
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