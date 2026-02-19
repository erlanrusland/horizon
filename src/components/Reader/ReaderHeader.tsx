import { Menu, ChevronRight, Home, Clock } from 'lucide-react';
import DarkModeToggle from '../DarkModeToggle';
import { type Note } from '../../utils/loader';

interface ReaderHeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  selectedNote: Note | null;
  onBackToLanding: () => void;
}

export const ReaderHeader = ({ 
  isSidebarOpen, 
  setIsSidebarOpen, 
  selectedNote, 
  onBackToLanding 
}: ReaderHeaderProps) => {
  return (
    <header className="h-20 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-6 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl z-30 shrink-0">
      <div className="flex items-center gap-4">
        {/* Toggle Sidebar Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          className="p-3 bg-slate-50 dark:bg-slate-900 hover:bg-blue-600 hover:text-white transition-all rounded-xl group shadow-sm active:scale-95"
          title="Toggle Menu"
        >
          <Menu size={18} className={`transition-transform duration-300 ${isSidebarOpen ? 'rotate-90' : 'rotate-0'}`} />
        </button>

        <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 hidden sm:block" />
        
        {/* Breadcrumbs & Note Info */}
        {selectedNote ? (
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="flex items-center gap-2">
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hidden md:block">Catatan</span>
               <ChevronRight size={10} className="text-slate-300 hidden md:block" />
               <span className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-[150px] md:max-w-[300px]">
                {selectedNote.fileName.replace(/\.[^/.]+$/, "")}
              </span>
            </div>
            {/* Tag lastModified kecil di header */}
            <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-medium">
              <Clock size={10} />
              <span>{selectedNote.lastModified}</span>
            </div>
          </div>
        ) : (
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 italic">
            Pilih Dokumen...
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <button 
          onClick={onBackToLanding} 
          className="group flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95"
        >
          <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <Home size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 hidden lg:block">
            Beranda
          </span>
        </button>

        <div className="h-6 w-[1px] bg-slate-100 dark:bg-slate-800" />
        
        <DarkModeToggle />
      </div>
    </header>
  );
};