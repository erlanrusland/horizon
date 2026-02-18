import { BookOpen } from 'lucide-react';
import DarkModeToggle from '../DarkModeToggle'; // Pastikan path ini benar

interface NavbarProps {
  onOpenReader: () => void;
}

export const Navbar = ({ onOpenReader }: NavbarProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-lg border-b border-slate-100 dark:border-slate-800 z-50 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 font-black text-2xl tracking-tight">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/40 rotate-3 transition-transform hover:rotate-0 hover:scale-105 duration-300 ease-out">
            <BookOpen size={24} />
          </div>
          <span className="dark:text-white">Erland<span className="text-blue-600">Notes</span></span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 sm:gap-6">
          <DarkModeToggle />
          <button 
            onClick={onOpenReader} 
            className="text-sm font-bold px-5 py-2.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full hover:scale-105 transition active:scale-95 shadow-md hover:shadow-lg"
          >
            Mulai Baca
          </button>
        </div>
      </div>
    </nav>
  );
};