import { X } from 'lucide-react';
import { FolderView } from './FolderView';
import { type FolderNode, type Note } from '../../utils/loader';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  noteTree: FolderNode;
  selectedNote: Note | null;
  onSelectNote: (note: Note) => void;
}

export const Sidebar = ({ isOpen, onClose, noteTree, selectedNote, onSelectNote }: SidebarProps) => {
  return (
    <>
      {/* Overlay untuk Mobile - Z-index di bawah aside */}
      <div 
        className={`fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-40 md:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <aside 
        className={`
          /* Position & Z-index */
          fixed md:relative z-50 h-full 
          
          /* Visual Style */
          bg-slate-50/80 dark:bg-slate-900/40 backdrop-blur-xl 
          border-r border-slate-200 dark:border-slate-800 
          
          /* Animation Logic */
          transition-[width,transform,opacity] duration-500 ease-in-out 
          flex flex-col overflow-hidden shrink-0
          
          /* Responsivitas Lebar & Transform */
          ${isOpen 
            ? 'w-80 translate-x-0 opacity-100' 
            : 'w-0 -translate-x-full md:translate-x-0 md:opacity-0 pointer-events-none md:pointer-events-auto'}
        `}
      >
        {/* Konten tetap w-80 agar tidak bergeser layoutnya saat aside mengecil */}
        <div className="w-80 flex flex-col h-full">
          {/* Header Sidebar */}
          <div className="p-8 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-black text-slate-800 dark:text-slate-200 uppercase tracking-[0.3em] text-[10px]">
                Erlan Archive
              </span>
            </div>
            <button 
              onClick={onClose} 
              className="md:hidden p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              <X size={18}/>
            </button>
          </div>
          
          {/* List Folder - Custom Scrollbar aktif di sini */}
          <div className="flex-1 overflow-y-auto px-4 pb-10 custom-scrollbar">
            <FolderView 
              node={noteTree} 
              selectedNote={selectedNote} 
              onSelect={onSelectNote} 
            />
          </div>

          {/* User Profile Section */}
          <div className="p-6 border-t border-slate-200 dark:border-slate-800">
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-2xl flex items-center gap-3 border border-slate-100 dark:border-slate-700/50 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xs">
                ER
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black dark:text-white uppercase tracking-tighter leading-none mb-1">
                  Erlan Admin
                </span>
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">
                  System Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};