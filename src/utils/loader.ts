export interface Note {
  id: string;
  fileName: string;
  content: string;
  extension: 'md' | 'html' | 'txt';
}

export interface FolderNode {
  name: string;
  files: Note[];
  subFolders: Record<string, FolderNode>;
}

export const getCatatanTree = (): FolderNode => {
  const modules = import.meta.glob('/src/catatan/**/*.{md,txt,html}', { 
    eager: true, 
    query: '?raw',
    import: 'default' 
  });

  const root: FolderNode = { name: 'root', files: [], subFolders: {} };

  Object.entries(modules).forEach(([path, content]) => {
    const parts = path.split('/');
    // Ambil bagian setelah 'catatan'
    const catatanIndex = parts.indexOf('catatan');
    const pathParts = parts.slice(catatanIndex + 1); // Contoh: ['Matematika', 'sub-matematika1', 'file.md']
    
    let currentNode = root;
    
    for (let i = 0; i < pathParts.length; i++) {
      const part = pathParts[i];
      const isFile = i === pathParts.length - 1;

      if (isFile) {
        currentNode.files.push({
          id: path,
          fileName: part,
          content: content as string,
          extension: part.split('.').pop()?.toLowerCase() as any
        });
      } else {
        if (!currentNode.subFolders[part]) {
          currentNode.subFolders[part] = { name: part, files: [], subFolders: {} };
        }
        currentNode = currentNode.subFolders[part];
      }
    }
  });

  return root;
};