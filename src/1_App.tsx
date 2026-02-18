
import { BookOpen, Github, ArrowRight, Notebook, Layout, Zap } from 'lucide-react';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    // Tambahkan class dark:bg-slate-950 dark:text-slate-100
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-blue-100 dark:selection:bg-blue-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <BookOpen size={20} />
            </div>
            <span className="dark:text-white">Erland<span className="text-blue-600">Notes</span></span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Fitur</a>
            </div>
            
            {/* Dark Mode Toggle dipasang di sini */}
            <DarkModeToggle />

            <a href="https://github.com" className="flex items-center gap-2 bg-slate-900 dark:bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-slate-800 dark:hover:bg-blue-700 transition text-sm font-medium">
              <Github size={16} /> <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Dokumentasi Perjalanan Belajar Saya.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kumpulan catatan teknis, tutorial, dan hasil eksplorasi pemrograman yang saya rangkum secara rapi di satu tempat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 dark:shadow-none transition-all flex items-center justify-center gap-2">
              Baca Catatan <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              Lihat Projek
            </button>
          </div>
        </div>
      </header>

      {/* Features / Categories Section */}
      <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900/50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <Notebook size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Terstruktur</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Catatan disusun berdasarkan kategori mulai dari Dasar hingga Advanced.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Minimalis</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Fokus pada konten dengan desain yang bersih dan nyaman dibaca lama.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Cepat</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Dibangun dengan Vite dan Tailwind v4 untuk performa maksimal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 dark:text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Erland Notes. Dibuat dengan ❤️ oleh Erlan.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;