import { BookOpen } from 'lucide-react';
import DarkModeToggle from '../DarkModeToggle';

interface NavbarProps {
  onOpenReader: () => void;
}

export const Navbar = ({ onOpenReader }: NavbarProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-600/20">
            <BookOpen size={20} />
          </div>

          <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Erland<span className="text-blue-600">Notes</span>
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />

          <button
            onClick={onOpenReader}
            className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
          >
            Mulai Baca
          </button>
        </div>
      </div>
    </nav>
  );
};
