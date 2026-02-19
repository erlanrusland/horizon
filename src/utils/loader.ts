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
  // Kita gunakan array agar Sidebar lebih mudah melakukan mapping
  subFolders: FolderNode[]; 
}

// Interface internal untuk memudahkan proses building tree
interface TempFolderNode {
  name: string;
  files: Note[];
  subFolders: Record<string, TempFolderNode>;
}

export const getCatatanTree = (): FolderNode => {
  // Ambil semua modul tanpa ?raw agar metadata (lastModified) terbaca
  const modules = import.meta.glob('/src/catatan/**/*.{md,txt,html}', { 
    eager: true 
  });

  const root: TempFolderNode = { name: 'Catatan', files: [], subFolders: {} };

  Object.entries(modules).forEach(([path, moduleData]) => {
    // Type assertion agar TS tahu ada properti 'default' dan 'lastModified'
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
          fileName: part.replace(/\.(md|txt|html)$/, ''), // Bersihkan ekstensi dari nama
          content: typeof mod.default === 'string' ? mod.default : '', 
          extension: extension || 'md',
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

  // Konversi Record ke Array secara rekursif agar sesuai interface FolderNode
  const formatNode = (node: TempFolderNode): FolderNode => ({
    name: node.name,
    files: node.files,
    subFolders: Object.values(node.subFolders).map(formatNode)
  });

  return formatNode(root);
};