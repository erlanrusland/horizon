import { useState } from 'react';
import { ChevronRight, FileText } from 'lucide-react';
import { type FolderNode, type Note } from '../../utils/loader';

interface FolderViewProps {
  node: FolderNode;
  level?: number;
  selectedNote: Note | null;
  onSelect: (note: Note) => void;
}

export const FolderView = ({ node, level = 0, selectedNote, onSelect }: FolderViewProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const isRoot = node.name === 'root';

  return (
    <div className={`${!isRoot && level > 0 ? "ml-4 border-l border-slate-200 dark:border-slate-800" : ""}`}>
      {!isRoot && (
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-2 px-2 py-2 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all rounded-lg text-left group"
        >
          <ChevronRight 
            size={14} 
            className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-90 text-blue-500' : ''}`} 
          />
          <span className={`text-[11px] font-bold uppercase tracking-[0.15em] ${isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
            {node.name}
          </span>
        </button>
      )}

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mt-1">
          {Object.values(node.subFolders).map(sub => (
            <FolderView key={sub.name} node={sub} level={level + 1} selectedNote={selectedNote} onSelect={onSelect} />
          ))}
          {node.files.map(note => (
            <button 
              key={note.id}
              onClick={() => onSelect(note)}
              className={`w-full text-left px-3 py-2 rounded-xl text-sm flex items-center gap-3 mb-1 transition-all group ${
                selectedNote?.id === note.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 translate-x-1' 
                  : 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:translate-x-1'
              }`}
            >
              <FileText size={15} className={`${selectedNote?.id === note.id ? 'text-white' : 'text-slate-400 group-hover:text-blue-500'}`} />
              <span className="truncate font-medium">{note.fileName.replace(/\.[^/.]+$/, "")}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};