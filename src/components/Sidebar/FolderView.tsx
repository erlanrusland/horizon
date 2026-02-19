import { useState, useMemo, useCallback } from 'react';
import { ChevronRight, FileText, Folder, FolderOpen } from 'lucide-react';
import { type FolderNode, type Note } from '../../utils/loader';

interface FolderViewProps {
  node: FolderNode;
  level?: number;
  selectedNote: Note | null;
  onSelect: (note: Note) => void;
}

export const FolderView = ({ node, level = 0, selectedNote, onSelect }: FolderViewProps) => {
  const isRoot = node.name === 'root';
  const [isOpen, setIsOpen] = useState(isRoot);

  const sortedSubFolders = useMemo(() => Object.values(node.subFolders), [node.subFolders]);
  const formattedFiles = useMemo(() => node.files.map(f => ({
    ...f,
    displayName: f.fileName.replace(/\.[^/.]+$/, "")
  })), [node.files]);

  const toggleFolder = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <div className={`
      ${!isRoot && level > 0 ? "ml-3 border-l border-slate-200 dark:border-slate-800/60 pl-2" : ""} 
      transition-all duration-300
    `}>
      {!isRoot && (
        <button 
          onClick={toggleFolder}
          className={`
            w-full flex items-center gap-2.5 px-2 py-2 rounded-xl text-left group transition-all
            ${isOpen ? 'bg-blue-50/50 dark:bg-blue-900/10' : 'hover:bg-slate-100 dark:hover:bg-slate-800/40'}
          `}
        >
          {/* Chevron Wrapper - Ditambah shrink-0 agar tetap bulat */}
          <div className={`
            p-1 rounded-md transition-all shrink-0
            ${isOpen ? 'bg-blue-600 text-white rotate-90' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}
          `}>
            <ChevronRight size={12} strokeWidth={3} />
          </div>
          
          {/* Ikon folder dinamis - Ditambah shrink-0 agar tidak gepeng */}
          <div className="shrink-0">
            {isOpen ? (
              <FolderOpen size={15} className="text-blue-500" />
            ) : (
              <Folder size={15} className="text-slate-400 group-hover:text-slate-500" />
            )}
          </div>

          <span className={`
            text-[10px] font-black uppercase tracking-[0.1em] transition-colors truncate
            ${isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}
          `}>
            {node.name}
          </span>
        </button>
      )}

      {/* Grid Animation Container */}
      <div className={`
        grid transition-all duration-300 ease-in-out
        ${isOpen || isRoot ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}
      `}>
        <div className="overflow-hidden">
          {/* Sub-folders */}
          {sortedSubFolders.map(sub => (
            <FolderView 
              key={sub.name} 
              node={sub} 
              level={level + 1} 
              selectedNote={selectedNote} 
              onSelect={onSelect} 
            />
          ))}

          {/* Files */}
          <div className={!isRoot ? "space-y-0.5 mt-0.5" : ""}>
            {formattedFiles.map(note => {
              const isSelected = selectedNote?.id === note.id;
              return (
                <button 
                  key={note.id}
                  onClick={() => onSelect(note)}
                  className={`
                    w-full text-left px-3 py-2.5 rounded-xl text-sm flex items-center gap-3 transition-all group relative
                    ${isSelected 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 translate-x-1' 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:translate-x-1'
                    }
                  `}
                >
                  {/* Indikator aktif vertikal */}
                  {isSelected && (
                    <div className="absolute left-1.5 w-1 h-3 bg-white/60 rounded-full" />
                  )}
                  
                  {/* Ikon File - Ditambah shrink-0 agar tidak mengecil saat judul panjang */}
                  <FileText 
                    size={15} 
                    className={`shrink-0 transition-colors ${isSelected ? 'text-white' : 'text-slate-400 group-hover:text-blue-500'}`} 
                  />
                  
                  <span className={`truncate ${isSelected ? 'font-bold' : 'font-medium'}`}>
                    {note.displayName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};