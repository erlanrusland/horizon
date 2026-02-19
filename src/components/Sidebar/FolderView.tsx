import { useState, useEffect } from 'react';
import { ChevronRight, FileText } from 'lucide-react';
import { type FolderNode, type Note } from '../../utils/loader';

interface FolderViewProps {
  node: FolderNode;
  level?: number;
  selectedNote: Note | null;
  onSelect: (note: Note) => void;
}

export const FolderView = ({ node, level = 0, selectedNote, onSelect }: FolderViewProps) => {
  // 1. Ubah default ke false agar tertutup
  const [isOpen, setIsOpen] = useState(false);
  const isRoot = node.name === 'root';

  // 2. Efek Smart Open: Jika file di dalam folder ini terpilih, buka foldernya otomatis
  useEffect(() => {
    const hasActiveFile = node.files.some(f => f.id === selectedNote?.id);
    const hasActiveSubFolder = Object.values(node.subFolders).some(sub => 
      sub.files.some(f => f.id === selectedNote?.id)
    );

    if (hasActiveFile || hasActiveSubFolder) {
      setIsOpen(true);
    }
  }, [selectedNote, node]);

  return (
    <div className={`${!isRoot && level > 0 ? "ml-4 border-l border-slate-100 dark:border-slate-800/50 pl-2 my-1" : ""}`}>
      {!isRoot && (
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center gap-2 px-2 py-2.5 transition-all rounded-xl text-left group mb-0.5 ${
            isOpen ? 'bg-slate-50/50 dark:bg-slate-900/30' : 'hover:bg-slate-100 dark:hover:bg-slate-900/50'
          }`}
        >
          <div className={`p-1 rounded-md transition-colors ${isOpen ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' : 'text-slate-400'}`}>
            <ChevronRight 
              size={12} 
              className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
            />
          </div>
          <span className={`text-[10px] font-black uppercase tracking-[0.15em] transition-colors ${
            isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-500'
          }`}>
            {node.name}
          </span>
        </button>
      )}

      {/* Konten Folder */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen || isRoot ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className={!isRoot ? "mt-1 space-y-0.5" : ""}>
          {/* Render Sub-folders */}
          {Object.values(node.subFolders).map(sub => (
            <FolderView 
              key={sub.name} 
              node={sub} 
              level={level + 1} 
              selectedNote={selectedNote} 
              onSelect={onSelect} 
            />
          ))}
          
          {/* Render Files */}
          {node.files.map(note => {
            const isActive = selectedNote?.id === note.id;
            return (
              <button 
                key={note.id}
                onClick={() => onSelect(note)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm flex items-center gap-3 transition-all group ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 translate-x-1' 
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <FileText 
                  size={14} 
                  className={`shrink-0 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-500'}`} 
                />
                <span className={`truncate ${isActive ? 'font-bold' : 'font-medium'}`}>
                  {note.fileName.replace(/\.[^/.]+$/, "")}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};