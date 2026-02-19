import { ArrowRight, Sparkles, LayoutDashboard, FileText } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero = ({ onStart }: HeroProps) => {
  return (
    <div className="relative overflow-x-hidden bg-white dark:bg-slate-950">
      
      {/* subtle background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* ================= HERO ================= */}
      <header className="relative pt-36 pb-24 md:pt-48 md:pb-32 px-6 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-blue-200/40 dark:border-blue-500/20 bg-blue-50/60 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-widest uppercase">
          <Sparkles size={14} />
          Version 1.0 • 2026
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-slate-900 dark:text-white mb-8">
          Keep Your
          <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Knowledge Organized
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Dokumentasikan catatan dengan{' '}
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            ErlandNotes
          </span>{' '}
          secara cerdas, otomatis, dan terstruktur dalam satu workspace elegan.
        </p>

        <button
          onClick={onStart}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 active:translate-y-0"
        >
          Mulai Sekarang
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </header>

      {/* ================= FEATURES ================= */}
      <section className="relative py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Kenapa Memilih <span className="text-blue-600">ErlandNotes</span>?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Dirancang untuk produktivitas, fokus, dan kemudahan dalam mengelola pengetahuan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="group p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-6">
                <Sparkles size={22} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Catatan Cerdas
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Organisasi otomatis dalam folder dan kategori untuk akses cepat dan efisien.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 mb-6">
                <LayoutDashboard size={22} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Tampilan Intuitif
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Interface modern yang bersih dan fokus pada konten tanpa distraksi.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30 mb-6">
                <FileText size={22} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Multi-Format
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Mendukung Markdown, HTML, dan Plain Text untuk fleksibilitas dokumentasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 text-center text-sm text-slate-400 border-t border-slate-200 dark:border-slate-800">
        © 2026 ErlandNotes — Crafted by Erlan
      </footer>
    </div>
  );
};
