import { Menu, ChevronRight, Home } from 'lucide-react';
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
    <header className="h-20 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-8 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl z-30 shrink-0">
      <div className="flex items-center gap-6">
        {/* Toggle Sidebar Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          className="p-3 bg-slate-100 dark:bg-slate-900 hover:bg-blue-600 hover:text-white transition-all rounded-2xl group shadow-sm active:scale-95"
          title="Toggle Menu"
        >
          <Menu size={20} className="group-hover:rotate-180 transition-transform duration-500" />
        </button>

        <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 hidden sm:block" />
        
        {/* Breadcrumbs */}
        {selectedNote && (
          <div className="hidden sm:flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 animate-in fade-in slide-in-from-left-4 duration-500">
            <span className="hover:text-blue-500 cursor-default transition-colors">Catatan</span>
            <ChevronRight size={10} className="text-slate-300" />
            <span className="text-slate-900 dark:text-white truncate max-w-[200px] bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
              {selectedNote.fileName.replace(/\.[^/.]+$/, "")}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-5">
        {/* REFACTORED: Button Beranda */}
        <button 
          onClick={onBackToLanding} 
          className="group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 active:scale-95"
        >
          <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <Home size={14} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Beranda
          </span>
        </button>

        <div className="h-6 w-[1px] bg-slate-100 dark:bg-slate-800" />
        
        <DarkModeToggle />
      </div>
    </header>
  );
};