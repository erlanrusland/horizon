import { X, ShieldCheck } from 'lucide-react';
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
      {/* Overlay untuk Mobile */}
      <div 
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <aside 
        className={`
          /* Position & Z-index */
          fixed md:relative z-50 h-full 
          
          /* Visual Style */
          bg-slate-50/90 dark:bg-slate-950/40 backdrop-blur-2xl 
          border-r border-slate-200/60 dark:border-slate-800/60 
          
          /* Animation Logic */
          transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          flex flex-col overflow-hidden shrink-0
          
          /* Refactor Lebar: Gunakan w-0 saat tutup agar layout main ikut bergeser di Desktop */
          ${isOpen 
            ? 'w-80 translate-x-0 opacity-100' 
            : 'w-0 -translate-x-full md:translate-x-0 md:opacity-0 pointer-events-none'}
        `}
      >
        {/* Konten dikunci di w-80 agar tidak penyok saat Sidebar mengecil */}
        <div className="w-80 flex flex-col h-full">
          
          {/* Header Sidebar - Lebih clean */}
          <div className="pt-10 px-8 pb-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping absolute inset-0" />
                <div className="w-2 h-2 rounded-full bg-blue-600 relative" />
              </div>
              <span className="font-black text-slate-900 dark:text-slate-100 uppercase tracking-[0.25em] text-[11px]">
                Erlan Archive
              </span>
            </div>
            <button 
              onClick={onClose} 
              className="md:hidden p-2.5 bg-white dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 rounded-xl transition-all active:scale-95 shadow-sm"
            >
              <X size={16}/>
            </button>
          </div>
          
          {/* List Folder */}
          <div className="flex-1 overflow-y-auto px-5 pb-8 custom-scrollbar scroll-smooth">
            <FolderView 
              node={noteTree} 
              selectedNote={selectedNote} 
              onSelect={onSelectNote} 
            />
          </div>

          {/* User Profile Section - Lebih 'Premium' Look */}
          <div className="p-6 mt-auto">
            <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 p-4 rounded-[2rem] flex items-center gap-4 border border-white dark:border-slate-700/50 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-blue-500/40">
                  ER
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full" />
              </div>
              
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-black dark:text-white uppercase tracking-tight truncate">
                    Erlan Admin
                  </span>
                  <ShieldCheck size={10} className="text-blue-500" />
                </div>
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-[0.1em]">
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